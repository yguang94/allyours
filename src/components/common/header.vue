<template>
  <div class="header">
    <el-row class="MaxWidth">
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <div style="line-height: 65px;padding: 10px;position: relative">
          <img src="../../assets/images/logo@2x.png" alt="">
          <span class="header_logo_txt"><router-link tag="div" to="/">All Yours</router-link></span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
        <div style="line-height: 65px;text-align: center">
          <span class="header_item">
            <router-link tag="div" to="/">首页</router-link>
          </span>
          <span class="header_item" @click='rulesVisible = true'>活动规则</span>
          <span class="header_item">
            <router-link tag="div" to="/history">开奖历史</router-link>
          </span>
        </div>
      </el-col>
      <el-col :span="8" class="hidden-xs-only">
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
      :modal-append-to-body='false'
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

    <el-dialog
      :show-close='false'
      :visible.sync="rulesVisible"
      :modal-append-to-body='false'
      width="700px">
      <div class="rules_warp">
        <span class="rulesTitle">活动规则</span>
        <span class="rulesContent">1.夺宝玩家可使用数字资产ETH购买夺宝人次参与夺宝,可多人次参与。</span>
        <span class="rulesContent">2.夺宝活动不限制玩家参与人次，玩家每购买1人次，将获得1个系统分配的夺宝号码</span>
        <span class="rulesContent">3.每项夺宝活动人次集齐后，即刻抽奖并公布获奖地址，系统自动开奖并按照公平公正夺宝算法抽取夺宝获奖者。</span>
        <span class="rulesContent">4.夺宝奖励的70%会自动发放至获奖者钱包地址中。10%将以捐款形式捐助和支持慈善基金会。20%为平台收取手续费和矿工费。</span>
        <span class="rulesContent">5.夺宝玩家可通过导入钱包或转账形式进行支付。仅支持导入ETH钱包，且不能超过3个。</span>
        <span class="rulesContent">6.计算规则：当夺宝号码售罄后，系统会记录下当前区块链最新区块号，同时等待幸运区块号的生成（售罄区块号+10）.带幸运区块号确认后，去幸运区块号签名（哈希值）的最后8位，转为10进制数字，基于夺宝总人次进行取余，得到的数字即为幸运号码。</span>
        <span class="rulesContent">由于区块哈希值为随机数，无法人为干预，故保证了夺宝获奖者的随机性和公正性。</span>
        <span class="rulesContent">7.All yours保留对夺宝玩法的最终解释权。</span>
        <span class="rulesButton" @click='rulesVisible = false'>知道了</span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css';

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
        rulesVisible: false
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
