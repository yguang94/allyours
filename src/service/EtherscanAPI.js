// import Vue from 'vue'
import axios from 'axios'
// import Qs from 'qs'

const EtherscanAPI = class EtherscanAPI {

  call(url, isProcFail) {
    let that = this;
    return new Promise(function (resolve, reject) {
      let realURL = 'https://api-kovan.etherscan.io/api?' + url
      axios.post(realURL)
        .then(res => {
          res = res.data
          console.log(res)
          if (res.status === '1') {
            console.log('链接成功')
            resolve(res.result)
            return
          }
          if (isProcFail) {
            that.$message({
              showClose: true,
              message: res.message,
              type: 'error',
              center: true
            })
          }
          reject(res.message)
        })
    })
  }

  // 千分位
  commafy(num) {
    num = (num + '').trim()
    num = num.replace(/,/g, '')
    if (num === '') {
      return ''
    }
    if (isNaN(num)) {
      return ''
    }
    let t = parseFloat(num).toFixed(2)
    num = t + ''
    if (/^.*\..*$/.test(num)) {
      let pointIndex = num.lastIndexOf('.')
      let intPart = num.substring(0, pointIndex)
      let pointPart = num.substr(pointIndex + 1, 2)
      // console.log('debug:', num, pointIndex, pointPart)
      intPart = intPart + ''
      let re = /(-?\d+)(\d{3})/
      while (re.test(intPart)) {
        intPart = intPart.replace(re, '$1,$2')
      }
      num = intPart + '.' + pointPart
    } else {
      let re = /(-?\d+)(\d{3})/
      while (re.test(num)) {
        num = num.replace(re, '$1,$2')
      }
    }
    if (num.lastIndexOf('.') === -1) {
      num = num + '.00'
    }
    return num
  }

  // 去除千分位
  // @param{Object}num
  delcommafy(num) {
    num = num + ''
    if (num.trim() === '') {
      return ''
    }
    num = num.replace(/,/gi, '')
    return num
  }

  // 时间
  conData(data){
    let myDate;

    myDate = new Date(data * 1000);
    // if(data !== 1){
    //   myDate = new Date(data * 1000);
    // }else{
    //   myDate = new Date();
    // }

    let Y = myDate.getFullYear(),
      M = myDate.getMonth() + 1,
      D = myDate.getDate(),
      H = myDate.getHours(),
      Min = myDate.getMinutes(),
      S = myDate.getSeconds();

    if(M < 10){
      M = '0' + M ;
    }
    if(D < 10){
      D = '0' + D ;
    }
    if(H < 10){
      H = '0' + H ;
    }
    if(Min < 10){
      Min = '0' + Min ;
    }
    if(S < 10){
      S = '0' + S ;
    }
    return Y + '-' + M + '-' + D + ' ' + H + ':' + Min + ':' + S;
  }

}

export default EtherscanAPI
