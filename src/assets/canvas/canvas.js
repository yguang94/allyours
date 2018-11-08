const canvas = class canvas {
    init() {
        const webGL = {
            init(options) {
                this.elem = document.querySelector("canvas");
                this.gl = (
                    this.elem.getContext("webgl", options) ||
                    this.elem.getContext("experimental-webgl", options)
                );
                if (!this.gl) return false;
                const vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(vertexShader, `
			precision highp float;
			attribute vec2 aPosition;
			uniform vec3 uHSV;
			uniform vec2 uResolution;
			varying vec4 vColor;
			vec3 hsv2rgb(vec3 c) {
				vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
				vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
				return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
			}
			void main() {
				gl_PointSize = 1.0;
				gl_Position = vec4(
					( aPosition.x / uResolution.x * 2.0) - 1.0, 
					(-aPosition.y / uResolution.y * 2.0) + 1.0, 
					0.0,
					1.0
				);
				vColor = vec4(hsv2rgb(uHSV), 1.0);
			}
		`);
                this.gl.compileShader(vertexShader);
                const fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(fragmentShader, `
			precision highp float;
			varying vec4 vColor;
			void main() {
				gl_FragColor = vColor;
			}
		`);
                this.gl.compileShader(fragmentShader);
                this.program = this.gl.createProgram();
                this.gl.attachShader(this.program, vertexShader);
                this.gl.attachShader(this.program, fragmentShader);
                this.gl.linkProgram(this.program);
                this.gl.useProgram(this.program);
                this.aPosition = this.gl.getAttribLocation(this.program, "aPosition");
                this.gl.enableVertexAttribArray(this.aPosition);
                this.positionBuffer = this.gl.createBuffer();
                this.uHSV = this.gl.getUniformLocation(this.program, "uHSV");
                this.gl.enableVertexAttribArray(this.uHSV);
                this.resize();
                window.addEventListener("resize", () => this.resize(), false);
                return this;
            },
            resize() {
                this.width = this.elem.width = this.elem.offsetWidth;
                this.height = this.elem.height = this.elem.offsetHeight;
                const uResolution = this.gl.getUniformLocation(this.program, "uResolution");
                this.gl.enableVertexAttribArray(uResolution);
                this.gl.uniform2f(uResolution, this.width, this.height);
                this.gl.viewport(0, 0,
                    this.gl.drawingBufferWidth,
                    this.gl.drawingBufferHeight
                );
            },
            blend(s, d) {
                this.gl.blendFunc(s, d);
                this.gl.enable(this.gl.BLEND);
            },
            createBufferLine(len) {
                this.num = len;
                this.bufferLine = new Float32Array(len * 2);
            },
            beginPath() {
                this.k = 0;
            },
            strokeStyle(h, s, v) {
                this.gl.uniform3f(this.uHSV, h, s, v);
            },
            lineTo(x, y) {
                this.bufferLine[this.k++] = x;
                this.bufferLine[this.k++] = y;
            },
            stroke() {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
                this.gl.vertexAttribPointer(this.aPosition, 2, this.gl.FLOAT, false, 0, 0);
                this.gl.bufferData(
                    this.gl.ARRAY_BUFFER,
                    this.bufferLine,
                    this.gl.DYNAMIC_DRAW
                );
                this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.num);
            }
        };
        const perlin = {
            init() {
                this.p = new Uint8Array(512);
                const p = new Uint8Array(256);
                for (let i = 0; i < 256; i++) p[i] = i;
                for (let i = 255; i > 0; i--) {
                    const n = Math.floor((i + 1) * Math.random());
                    [p[i], p[n]] = [p[n], p[i]];
                }
                for (let i = 0; i < 512; i++) this.p[i] = p[i & 255];
            },
            fade(t) {
                return t * t * t * (t * (t * 6 - 15) + 10);
            },
            lerp(t, a, b) {
                return a + t * (b - a);
            },
            grad(hash, x, y, z) {
                const h = hash & 15;
                const u = h < 8 ? x : y;
                const v = h < 4 ? y : h == 12 || h == 14 ? x : z;
                return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
            },
            noise(xi, yi, zi) {
                const X = Math.floor(xi) & 255;
                const Y = Math.floor(yi) & 255;
                const Z = Math.floor(zi) & 255;
                const x = xi - Math.floor(xi);
                const y = yi - Math.floor(yi);
                const z = zi - Math.floor(zi);
                const u = this.fade(x);
                const v = this.fade(y);
                const w = this.fade(z);
                const A = this.p[X] + Y;
                const AA = this.p[A] + Z;
                const AB = this.p[A + 1] + Z;
                const B = this.p[X + 1] + Y;
                const BA = this.p[B] + Z;
                const BB = this.p[B + 1] + Z;
                return this.lerp(
                    w,
                    this.lerp(
                        v,
                        this.lerp(u, this.grad(this.p[AA], x, y, z), this.grad(this.p[BA], x - 1, y, z)),
                        this.lerp(u, this.grad(this.p[AB], x, y - 1, z), this.grad(this.p[BB], x - 1, y - 1, z))
                    ),
                    this.lerp(
                        v,
                        this.lerp(u, this.grad(this.p[AA + 1], x, y, z - 1), this.grad(this.p[BA + 1], x - 1, y, z - 1)),
                        this.lerp(
                            u,
                            this.grad(this.p[AB + 1], x, y - 1, z - 1),
                            this.grad(this.p[BB + 1], x - 1, y - 1, z - 1)
                        )
                    )
                );
            }
        };
        const canvas = webGL.init({
            alpha: false,
            stencil: false,
            antialias: true,
            depth: false,
        });
        canvas.blend(canvas.gl.ONE, canvas.gl.ONE);
        perlin.init();
        canvas.createBufferLine(100);
        let z = 0;

        function run() {
            const sw = canvas.width / 100;
            const sh = sw * 25; //调高矮
            for (let i = 0; i < 180; i++) {
                canvas.beginPath();
                canvas.strokeStyle(
                    z + i / 360,
                    0.5,
                    0.3
                );
                for (let j = -50; j < 50; j++) {
                    const h = perlin.noise(j * 0.05, z - i * 0.01, z)-0.6; //调位置
                    canvas.lineTo(
                        canvas.width * 0.5 + 0.01 * (i + 180) * j * sw * 0.5,
                        -90 + i + canvas.height * 0.7 + h * sh
                    );
                }
                canvas.stroke();
            }
            z += 0.0025;
            requestAnimationFrame(run);
        }

        run();


    }
}

export default new canvas()