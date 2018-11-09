<template>
  <div class="home_wrap">
    <div class="frist_wrap">
      <!--顶部-->
      <div class="header MaxWidth">
        <el-row>
          <el-col :span="24">
            <div class="downloadApp">
              <div class="downloadButton" @click="openDownloadApp"><span class="iosicon"></span>IOS下载</div>
              <div class="downloadButton" @click="openDownloadApp"><span class="androidicon"></span>安卓下载</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--首屏内容-->
      <div class="progress_wrap MaxWidth">
        <el-row>
          <el-col :span="24">
            <img class="logoL" src="../assets/images/logoL.png" alt="">
          </el-col>
          <el-col :span="24">
            <span class="progress_text1">赢取 1ETH</span>
            <div class="progress_text_warp">
              <span class="progress_text2">夺宝仅需 0.01ETH</span>
              <span class="progress_text2">参与人次越多夺宝机会越大</span>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="el-progress_warp" ref="progressWidth">
              <div class="progress_tip" :style="{ 'left': progressNum2 + 'px' }">
                <span>开奖进度: {{progressNum}}%</span>
              </div>
              <el-progress :percentage="progressNum" :stroke-width="18"
                           :show-text='false' color="#FA52FC"></el-progress>
              <span class="progress_text3" style="float: left">0.01ETH/人次</span>
              <span class="progress_text3" style="float: right">参与人次: 100</span>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="playButton">
              立即夺宝
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="second_warp">
      <!--内容-->
      <div class="content_wrap MaxWidth">
        <!--本期夺宝参与者-->
        <el-row>
          <el-col :span="24">
            <div class="contentTitle">
              <div class="logoS"></div>
              <span>本期夺宝参与者</span>
              <div class="logoS"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="contentCard">
              <el-card class="box-card" style="padding: 0 4vw">
                <el-row>
                  <el-col :span="24">
                    <div style="margin-bottom: 4vh">
                      <span class="periodText">3243期</span>
                      <span style="display: inline-block">566 人已参与</span>
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <el-row :gutter="20">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="participateList">
                          <span class="participateText1">2018.09.30 12:30:15 </span>
                          <span class="participateText2">参与者地址：erewuryeowfsdkf73339dd</span>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="participateList">
                          <span class="participateText1">2018.09.30 12:30:15 </span>
                          <span class="participateText2">参与者地址：erewuryeowfsdkf73339dd</span>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="participateList">
                          <span class="participateText1">2018.09.30 12:30:15 </span>
                          <span class="participateText2">参与者地址：erewuryeowfsdkf73339dd</span>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="participateList">
                          <span class="participateText1">2018.09.30 12:30:15 </span>
                          <span class="participateText2">参与者地址：erewuryeowfsdkf73339dd</span>
                        </div>
                      </el-col>
                    </el-row>

                  </el-col>
                </el-row>
              </el-card>
            </div>
          </el-col>
        </el-row>
        <!--开奖历史-->
        <el-row>
          <el-col :span="24">
            <div class="contentTitle">
              <div class="logoS"></div>
              <span>开奖历史</span>
              <div class="logoS"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="contentCard">
              <el-card class="box-card" style="padding: 0 4vw">
                <el-row>
                  <el-col :span="24">
                    <span style="float: right">
                      <router-link tag="a" target="_blank" to="/history">
                        更多
                        <i class="el-icon-arrow-right"></i>
                      </router-link>
                    </span>
                  </el-col>
                  <el-col :span="24">
                    <el-row :gutter="20">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="winHistory">
                          <span class="winHistoryText1"><span class="date_icon"></span>2018.10.12 12:30:15</span>
                          <span class="winHistoryText2">2566期 开奖结果公布</span>
                          <span class="winHistoryText3" @click="showDetails">查看详情</span>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="winHistory">
                          <span class="winHistoryText1"><span class="date_icon"></span>2018.10.12 12:30:15</span>
                          <span class="winHistoryText2">2566期 开奖结果公布</span>
                          <span class="winHistoryText3" @click="showDetails">查看详情</span>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="winHistory">
                          <span class="winHistoryText1"><span class="date_icon"></span>2018.10.12 12:30:15</span>
                          <span class="winHistoryText2">2566期 开奖结果公布</span>
                          <span class="winHistoryText3" @click="showDetails">查看详情</span>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <div class="winHistory">
                          <span class="winHistoryText1"><span class="date_icon"></span>2018.10.12 12:30:15</span>
                          <span class="winHistoryText2">2566期 开奖结果公布</span>
                          <span class="winHistoryText3" @click="showDetails">查看详情</span>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </el-col>
        </el-row>
        <!--活动规则-->
        <el-row>
          <el-col :span="24">
            <div class="contentTitle">
              <div class="logoS"></div>
              <span>活动规则</span>
              <div class="logoS"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="contentCard">
              <el-card class="box-card" style="background: rgba(255,255,255,0.1);border: none">
                <div class="rulesText">
                  <p>1.用户只可使用数字资产ETH购买夺宝人次,可多人次参与。</p>
                  <p>2.每次夺宝人次集齐（1200）后，即众人参与筹集满1.2ETH后，即刻抽奖并公布获奖地址，系统自动开奖并按照公平公正夺宝算法抽取夺宝获奖者。</p>
                  <p>3.每次的夺宝奖励系统会自动发放至获奖者钱包地址中 </p>
                  <p>4.夺宝支付购买参与人次前，需确保已导入余额充足的ETH钱包，否则您将成功参与夺宝活动</p>
                  <p>5.夺宝活动不限制玩家参与人次，但每次仅可购买1人次</p>
                  <p>6.All yours保留对夺宝玩法的最终解释权</p>
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
            <span class="footerText">@2018 All yours保留所有权利</span>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--下载app弹框-->
    <el-dialog
      :show-close='false'
      :visible.sync="DownloadAppVisible"
      width="60%">
        <span slot="title" class="DownloadAppDialog-header">
          <span class="DownloadAppDialog_close" @click="closeDownloadApp"><i class="el-icon-close"></i></span>
        </span>
        <div class="DownloadAppDialogContent">
          <span class="DownloadAppDialogText1">参与夺宝请下载客户端</span>
          <span class="DownloadAppDialogText2">扫码下载客户端</span>
          <div class="DownloadAppDialogContent_content">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <img class="DownloadAppDialog_img" src="../assets/images/erwei.png" alt="">
                <span class="DownloadAppDialogText3">ios客户端</span>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <img  class="DownloadAppDialog_img" src="../assets/images/erwei.png" alt="">
                <span class="DownloadAppDialogText3">Android客户端</span>
              </el-col>
            </el-row>
          </div>
        </div>
    </el-dialog>

    <!--开奖历史弹框-->
    <el-dialog
      :show-close='false'
      :visible.sync="showWinHistoryVisible"
      width="600px">
      <span slot="title" class="showWinHistoryVisible_header" @click="closeDetails">
          <span class="showWinHistoryVisible_close" ><i class="el-icon-close"></i></span>
      </span>
      <div class="showWinHistoryContent">
        <div class="showWinHistoryContent_title">
          <span>- 3242 期开奖详情 -</span>
        </div>
        <div class="showWinHistoryContent_content">
          <el-form  label-position="left" label-width="120px">
            <el-form-item label="开奖时间:">
              <span class="showWinHistoryContent_item">
                2018.10.12 15:20:33
              </span>
            </el-form-item>
            <el-form-item label="获奖地址:">
              <span class="showWinHistoryContent_item">
                2sdskldfjsi234jsdlkfjsldfijlsdfj2342
              </span>
            </el-form-item>
            <el-form-item label="总需人次:">
              <span class="showWinHistoryContent_item">
                1256人次
              </span>
            </el-form-item>
            <el-form-item label="合约地址:">
              <span class="showWinHistoryContent_item">
                22378ldksjfoisudfklsjdfio2234564lsdifs
              </span>
            </el-form-item>
            <el-form-item label="交易Hash值:">
              <span class="showWinHistoryContent_item">
                234sldkjflsdufoisd234lkjlksdfjios2342
              </span>
            </el-form-item>
            <el-form-item label="上链时间:">
              <span class="showWinHistoryContent_item">
                2018/10.20 14:15:30
              </span>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  function init() {
    let that = this;
    let width = parseInt(window.getComputedStyle(this.$refs.progressWidth).width);
    that.progressNum2 = (width - 20) * that.progressNum / 100 - 40;
  }

  function openDownloadApp() {
    this.DownloadAppVisible = true
  }
  function closeDownloadApp() {
    this.DownloadAppVisible = false
  }

  function showDetails() {
    this.showWinHistoryVisible = true
  }
  function closeDetails() {
    this.showWinHistoryVisible = false
  }
  export default {
    components: {},
    props: {},
    data() {
      return {
        progressNum: 76,
        progressNum2: '',
        DownloadAppVisible: false,
        showWinHistoryVisible:false
      }
    },
    watch: {},
    computed: {},
    methods: {
      openDownloadApp,
      closeDownloadApp,
      showDetails,
      closeDetails
    },
    created() {
    },
    mounted: init
  }
</script>

<style scoped>

</style>
