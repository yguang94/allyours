<!--import index from "../router";-->
<template>
  <div class="histry_warp">
    <img class="history_headerimg" src="../assets/images/winhistoryR.png" alt="">
    <div class="historyTitle_warp">
      <div class="heaer_placeholder"></div>
      <!--顶部-->
      <!--<div class="header MaxWidth">-->
      <!--<el-row>-->
      <!--<el-col :span="24">-->
      <!--<div class="downloadApp">-->
      <!--<div class="downloadButton" @click="openDownloadApp"><span class="iosicon"></span>IOS下载</div>-->
      <!--<div class="downloadButton" @click="openDownloadApp"><span class="androidicon"></span>安卓下载</div>-->
      <!--</div>-->
      <!--</el-col>-->
      <!--</el-row>-->
      <!--</div>-->
      <!--banner-->
      <div class="historyProgrsess_warp MaxWidth">
        <img src="../assets/images/gift.png" class="historyProgrsess_img" alt="">
        <span class="historyProgrsess_text">开奖历史</span>
      </div>
    </div>
    <!--内容-->
    <div class="historyContent_warp MaxWidth">
      <el-row :gutter="15">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(data,index) in historyList" :key="index">
          <div style="margin: 10px 5px">
            <el-card class="box-card">
              <span class="historyContent_icon"></span>
              <span class="historyContent_tiele">
                  {{data.periods}} 期开奖详情
                </span>
              <div class="historyContent_content">
                <el-form label-position="left" label-width="100px">
                  <el-form-item label="开奖时间:">
                    <div class="cardText">
                      <span class="showWinHistoryContent_item">
                      {{data.timeStamp}}
                      </span>
                    </div>
                  </el-form-item>
                  <el-form-item label="获奖地址:">
                    <div class="cardText">
                      <span class="showWinHistoryContent_item">
                      {{data.to}}
                    </span>
                    </div>
                  </el-form-item>
                  <el-form-item label="总需人次:">
                    <div class="cardText">
                      <span class="showWinHistoryContent_item">
                      4人次
                      </span>
                    </div>
                  </el-form-item>
                  <el-form-item label="合约地址:">
                    <div class="cardText">
                      <span class="showWinHistoryContent_item">
                      0x928ea63f59dd0a82a1b887993452fd50fddfb779
                      </span>
                    </div>
                  </el-form-item>
                  <el-form-item label="交易Hash值:">
                    <div class="cardText">
                       <span class="showWinHistoryContent_item">{{data.hash}}</span>
                    </div>
                  </el-form-item>
                </el-form>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--底部-->
    <div class="footer_wrap MaxWidth">
      <el-row>
        <el-col :span="24">
          <span class="footerText" style="color: #000">@2018 All yours保留所有权利</span>
        </el-col>
      </el-row>
    </div>
    <!--下载app弹框-->
    <el-dialog
      :show-close='false'
      :visible.sync="DownloadAppVisible"
      width="500px">
        <span slot="title" class="DownloadAppDialog-header">
          <span class="DownloadAppDialog_close" @click="closeDownloadApp"><i class="el-icon-close"></i></span>
        </span>
      <div class="DownloadAppDialogContent">
        <span class="DownloadAppDialogText1">参与夺宝请下载客户端</span>
        <span class="DownloadAppDialogText2">扫码下载客户端</span>
        <div class="DownloadAppDialogContent_content">
          <el-row :gutter="20">
            <el-col :span="12">
              <img class="DownloadAppDialog_img" src="../assets/images/erwei.png" alt="">
              <span class="DownloadAppDialogText3">ios客户端</span>
            </el-col>
            <el-col :span="12">
              <img class="DownloadAppDialog_img" src="../assets/images/erwei.png" alt="">
              <span class="DownloadAppDialogText3">Android客户端</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import E from '../service/PCCommon'

  function init() {
    this.init_3()
  }

  //获取中奖信息
  function init_3() {
    let that = this;
    let url = 'module=account&action=txlistinternal&address=0x928ea63f59dd0a82a1b887993452fd50fddfb779&startblock=0&endblock=99999999&sort=desc'
    E.call(url).then((d) => {
      console.log(d);
      for (let i in d) {
        if (d[i].to !== '0x8bb229e23407122387dbedc966d2afa73f47ec28') {
          d[i].timeStamp = E.conData(d[i].timeStamp);
          that.historyList.push(d[i]);
        }
      }
      for(let k in that.historyList) {
        that.historyList[k].periods = that.historyList.length - k
      }
      console.log(that.historyList);
    })
  }


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
        historyList: [],
        DownloadAppVisible: false
      }
    },
    watch: {},
    computed: {},
    methods: {
      openDownloadApp,
      closeDownloadApp,
      init_3
    },
    created() {
    },
    mounted: init
  }
</script>

<style scoped>

</style>
