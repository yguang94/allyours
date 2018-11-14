<template>
  <div class="header">
    <el-row class="MaxWidth">
      <el-col :span="24">
        <div class="downloadApp">
          <div class="downloadButton" @click="openDownloadApp"><span class="iosicon"></span>IOS下载</div>
          <div class="downloadButton" @click="openDownloadApp"><span class="androidicon"></span>安卓下载</div>
        </div>
      </el-col>
    </el-row>
    <!--下载app弹框-->
    <el-dialog
      :show-close='false'
      :visible.sync="DownloadAppVisible"
      width="700px">
        <span slot="title" class="DownloadAppDialog-header">
          <span class="DownloadAppDialog_close" @click="closeDownloadApp"><i class="el-icon-close"></i></span>
        </span>
      <div class="DownloadAppDialogContent">
        <span class="DownloadAppDialogText1">参与夺宝请下载客户端</span>
        <span class="DownloadAppDialogText2">扫码下载客户端</span>
        <div class="DownloadAppDialogContent_content">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img class="DownloadAppDialog_img" src="../../assets/images/erwei.png" alt="">
              <span class="DownloadAppDialogText3">ios客户端</span>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img class="DownloadAppDialog_img" src="../../assets/images/erwei.png" alt="">
              <span class="DownloadAppDialogText3">Android客户端</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  function openDownloadApp() {
    this.DownloadAppVisible = true
  }

  function closeDownloadApp() {
    this.DownloadAppVisible = false
  }
  export default {
    components: {},
    props: {},
    data() {
      return {
        DownloadAppVisible: false,
      }
    },
    watch: {},
    computed: {},
    methods: {
      openDownloadApp,
      closeDownloadApp,
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
