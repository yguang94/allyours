<template>
  <div class="details_wrap">
    <div class="frist_wrap">
      <div class="heaer_placeholder"></div>
      <!--首屏内容-->
      <div class="progress_wrap MaxWidth">
        <el-row>
          <el-col :span="24">
            <img class="logoL" src="../assets/images/logoL.png" alt="">
          </el-col>
          <el-col :span="24">
            <span class="progress_text1">{{bonusData.name}} 奖池</span>
            <span class="progress_text1">赢取 {{bonusData.bonusPool}}ETH</span>
            <div class="progress_text_warp">
              <span class="progress_text2">夺宝仅需 {{bonusData.price}}ETH</span>
              <span class="progress_text2">参与人次越多夺宝机会越大</span>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="el-progress_warp" ref="progressWidth">
              <div class="progress_tip" :style="{ 'left': progressNum2 + 'px' }">
                <span>开奖进度: {{this.progressNum}}%</span>
              </div>
              <el-progress :percentage="this.progressNum" :stroke-width="18"
                           :show-text='false' color="#FA52FC"></el-progress>
              <span class="progress_text3" style="float: left">{{bonusData.price}}ETH/人次</span>
              <span class="progress_text3" style="float: right">共需人次: {{bonusData.needNum}}</span>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="playButton" >
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
            <div class="contentCard" v-loading="detailsContentLoading">
              <el-card class="box-card" style="padding: 0 2vw">
                <el-row>
                  <el-col :span="24">
                    <div style="margin-bottom: 4vh">
                      <span class="periodText">{{this.periodCurrent}}期</span>
                      <span style="display: inline-block">{{this.participateNum}} 人已参与</span>
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <el-row :gutter="20">
                      <!----------------------若无开奖-------------->
                      <span class="noData_text" v-if="this.participateArr.length === 0">暂无开奖历史</span>
                      <!------------------------------------------->
                      <div class="participate_height">
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(data,index) in participateArr"
                                :key="index">
                          <div class="participateList cardText">
                            <span class="participateText1">{{data.time}}</span>
                            <span class="participateText2">参与者地址：{{data.address}}</span>
                          </div>
                        </el-col>
                      </div>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </el-col>
        </el-row>
        <!--开奖历史-->
        <!--<el-row>-->
        <!--<el-col :span="24">-->
        <!--<div class="contentTitle">-->
        <!--<div class="logoS"></div>-->
        <!--<span>开奖历史</span>-->
        <!--<div class="logoS"></div>-->
        <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="24">-->
        <!--<div class="contentCard">-->
        <!--<el-card class="box-card" style="padding: 0 4vw">-->
        <!--<el-row>-->
        <!--<el-col :span="24">-->
        <!--<span style="float: right">-->
        <!--<router-link tag="a" target="_blank" to="/history">-->
        <!--更多-->
        <!--<i class="el-icon-arrow-right"></i>-->
        <!--</router-link>-->
        <!--</span>-->
        <!--</el-col>-->
        <!--<el-col :span="24">-->
        <!--<el-row :gutter="20">-->
        <!--<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">-->
        <!--<div class="winHistory">-->
        <!--<span class="winHistoryText1"><span class="date_icon"></span>2018.10.12 12:30:15</span>-->
        <!--<span class="winHistoryText2">2566期 开奖结果公布</span>-->
        <!--<span class="winHistoryText3" @click="showDetails">查看详情</span>-->
        <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">-->
        <!--<div class="winHistory">-->
        <!--<span class="winHistoryText1"><span class="date_icon"></span>2018.10.12 12:30:15</span>-->
        <!--<span class="winHistoryText2">2566期 开奖结果公布</span>-->
        <!--<span class="winHistoryText3" @click="showDetails">查看详情</span>-->
        <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">-->
        <!--<div class="winHistory">-->
        <!--<span class="winHistoryText1"><span class="date_icon"></span>2018.10.12 12:30:15</span>-->
        <!--<span class="winHistoryText2">2566期 开奖结果公布</span>-->
        <!--<span class="winHistoryText3" @click="showDetails">查看详情</span>-->
        <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">-->
        <!--<div class="winHistory">-->
        <!--<span class="winHistoryText1"><span class="date_icon"></span>2018.10.12 12:30:15</span>-->
        <!--<span class="winHistoryText2">2566期 开奖结果公布</span>-->
        <!--<span class="winHistoryText3" @click="showDetails">查看详情</span>-->
        <!--</div>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--</el-card>-->
        <!--</div>-->
        <!--</el-col>-->
        <!--</el-row>-->
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


    <!--开奖历史弹框-->
    <!--<el-dialog-->
    <!--:show-close='false'-->
    <!--:visible.sync="showWinHistoryVisible"-->
    <!--width="600px">-->
    <!--<span slot="title" class="showWinHistoryVisible_header" @click="closeDetails">-->
    <!--<span class="showWinHistoryVisible_close"><i class="el-icon-close"></i></span>-->
    <!--</span>-->
    <!--<div class="showWinHistoryContent">-->
    <!--<div class="showWinHistoryContent_title">-->
    <!--<span>- 3242 期开奖详情 -</span>-->
    <!--</div>-->
    <!--<div class="showWinHistoryContent_content">-->
    <!--<el-form label-position="left" label-width="120px">-->
    <!--<el-form-item label="开奖时间:">-->
    <!--<span class="showWinHistoryContent_item">-->
    <!--2018.10.12 15:20:33-->
    <!--</span>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="获奖地址:">-->
    <!--<span class="showWinHistoryContent_item">-->
    <!--2sdskldfjsi234jsdlkfjsldfijlsdfj2342-->
    <!--</span>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="总需人次:">-->
    <!--<span class="showWinHistoryContent_item">-->
    <!--1256人次-->
    <!--</span>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="合约地址:">-->
    <!--<span class="showWinHistoryContent_item">-->
    <!--22378ldksjfoisudfklsjdfio2234564lsdifs-->
    <!--</span>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="交易Hash值:">-->
    <!--<span class="showWinHistoryContent_item">-->
    <!--234sldkjflsdufoisd234lkjlksdfjios2342-->
    <!--</span>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="上链时间:">-->
    <!--<span class="showWinHistoryContent_item">-->
    <!--2018/10.20 14:15:30-->
    <!--</span>-->
    <!--</el-form-item>-->
    <!--</el-form>-->
    <!--</div>-->
    <!--</div>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
  import Web3 from 'web3'
  import E from '../service/PCCommon'

  function init() {
    let that = this;
    that.address = '0xf829c44f453b252579ec4d3ccc2d14e69f202098';
    console.log(that.address);
    let i;
    for (i in that.dataList) {
      if (that.dataList[i].address === that.$route.params.addressData || that.dataList[i].address === that.address) {
        that.bonusData = that.dataList[i];
        console.log(that.bonusData);
      }
    }
    console.log(that.bonusData.address);

    this.init_();
    // this.init_2();
  }


  // //获取中奖信息
  // function init_2() {
  //   let that = this;
  //   // let url = 'module=account&action=txlistinternal&address='+that.$route.params.bonusData.address+'&startblock=0&endblock=4&sort=desc'
  //   let url = 'module=account&action=txlistinternal&address=0x928ea63f59dd0a82a1b887993452fd50fddfb779&startblock=0&endblock=99999999&page=1&offset=10&sort=desc'
  //   E.call(url).then((d) => {
  //     console.log(d);
  //   })
  // }


  function init_() {
    let that = this;
    that.detailsContentLoading = true;
    //创建web3对象
    let web3 = new Web3();

    //连接到以太坊节点
    web3.setProvider(new Web3.providers.HttpProvider("https://kovan.infura.io/2GGU6GIENZ6AKNTBIQHGVSNXRMAZC732MP"));
    let abi = [
      {
        "constant": true,
        "inputs": [],
        "name": "getAddressJoinPersonNumber",
        "outputs": [

          {
            "name": "",
            "type": "uint16"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCurrentJoinPersonNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint16"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getHistory",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getPeriod",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "name": "winnerAddress",
          "type": "address"
        }],
        "name": "drawCallback",
        "type": "event"
      }
    ];

    //合约地址
    // let address = "0x588fD6DB7dff7e64f74b2ee6d8fD2b36613d6B1d";
    let address = that.bonusData.address;

    //通过ABI和地址获取已部署的合约对象
    let AllYoursContract = new web3.eth.Contract(abi, address);

    //*******************智能合约提供的接口******************
    // 查看当期多少人参加了抽奖
    let LuckyNum = AllYoursContract.methods.getCurrentJoinPersonNumber().call().then(function (result) {
      console.log("当前参加人数" + result);
      that.participateNum = result;
      that.progressNum = result / that.bonusData.needNum * 100;
      let width = parseInt(window.getComputedStyle(that.$refs.progressWidth).width);
      that.progressNum2 = (width - 20) * that.progressNum / 100 - 40;
    });

    let width = parseInt(window.getComputedStyle(that.$refs.progressWidth).width);
    that.progressNum2 = (width - 20) * that.progressNum / 100 - 40;

    //查看当期参与人的钱包地址和参加时间
    //人用&分割,时间和钱包地址用|分割
    let timeAddress = AllYoursContract.methods.getHistory().call().then(function (result) {
      console.log("参与人钱包地址 参加时间" + result);
      let TA = [];
      TA = result.split('&');
      let addressArr = TA.slice(0);
      addressArr.shift();
      let taObjArr = [];
      for (let i in addressArr) {
        let addressData = addressArr[i].split('|');
        let addressObj = {
          time: E.conData(addressData[0]),
          address: addressData[1]
        };
        taObjArr.push(addressObj)
      }
      that.participateArr = taObjArr;
      console.log(that.participateArr);
      that.detailsContentLoading = false;
    });

    // 查看当期期数
    let periods = AllYoursContract.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.periodCurrent = result;
    })

    // //中奖方法事件回调 ???
    // let ClientReceipt = new web3.eth.Contract(abi,address);
    // let clientReceipt = ClientReceipt.events.drawCallback(function(error, event){
    //   console.log(event);
    // })
    //   .on('data', function (event) {
    //     console.log(1);
    //     console.log(event);
    //   })
    //   .on('changed', function(event){
    //     console.log(2);
    //     // remove event from local database
    //   })
    //   .on('error', console.error);

  }


  export default {
    components: {},
    props: {},
    data() {
      return {
        //参与人数
        participateNum: 0,
        //进度
        progressNum: 0,
        progressNum2: '',
        //参与着地址/时间
        participateArr: [],
        //当前期数
        periodCurrent: '',
        showWinHistoryVisible: false,
        detailsContentLoading: false,
        address: '',
        dataList: [
          {
            name: '#1号',
            address: '0xf829c44f453b252579ec4d3ccc2d14e69f202098',
            periodCurrent: '',
            participateNum: '',
            price: '0.002',
            needNum: '500',
            bonusPool: '1',
            progressNum: 0
          },
          {
            name: '#2号',
            address: '0xccb766ed3705b17694e18930ce283046dbd40e9a',
            periodCurrent: '',
            participateNum: '',
            price: '0.002',
            needNum: '500',
            bonusPool: '1',
            progressNum: 0
          },
          {
            name: '#3号',
//          address: '0xb35468ae8a8567290c63d89962241875d7c40044',
            address: '0x928ea63f59dd0a82a1b887993452fd50fddfb779',
            periodCurrent: '',
            participateNum: '',
            price: '0.002',
            needNum: '500',
            bonusPool: '1',
            progressNum: 0
          },
          {
            name: '#4号',
            address: '0xba216d6d2a979d005044d56d82b23ed82c134521',
            periodCurrent: '',
            participateNum: '',
            price: '0.002',
            needNum: '500',
            bonusPool: '1',
            progressNum: 0
          },
          {
            name: '#5号',
            address: '0xf2f9bdf754dfd0eaf65c9ac8bc9225d2a384aadd',
            periodCurrent: '',
            participateNum: '',
            price: '0.002',
            needNum: '500',
            bonusPool: '1',
            progressNum: 0
          },
          {
            name: '#6号',
            address: '0x3606db65824d9c9d0618776224a3849ae63803c3',
            periodCurrent: '',
            participateNum: '',
            price: '0.002',
            needNum: '500',
            bonusPool: '1',
            progressNum: 0
          },
          {
            name: '#7号',
            address: '0xa6a530bac381c3a83aaebde3ac3d5751ce6fc103',
            periodCurrent: '',
            participateNum: '',
            price: '0.002',
            needNum: '500',
            bonusPool: '1',
            progressNum: 0
          },
          {
            name: '#1号',
            address: '0xa74fe1a00ee22c63a1ade3a35c9c8de2c5fcf65f',
            periodCurrent: '',
            participateNum: '',
            price: '0.01',
            needNum: '100',
            bonusPool: '1',
            progressNum: 0
          },
          {
            name: '#2号',
            address: '0xd7e1c64a9177e9cd057e4da55d6f1766e0883b97',
            periodCurrent: '',
            participateNum: '',
            price: '0.1',
            needNum: '10',
            bonusPool: '1',
            progressNum: 0

          },
          {
            name: '#3号',
            address: '0xace8adf59a62151bfb126e76db6fd884dd66a337',
            periodCurrent: '',
            participateNum: '',
            price: '1',
            needNum: '5',
            bonusPool: '5',
            progressNum: 0
          },
          {
            name: '#1号',
            address: '0x8f6fbcd674bf103882d18a7921f653ea6f461ee1',
            periodCurrent: '',
            participateNum: '',
            price: '0.01',
            needNum: '1000000',
            bonusPool: '10000',
            progressNum: 0
          }
        ],
        bonusData: {}
      }
    },
    watch: {},
    computed: {},
    methods: {
      init_,
      // init_2
    },
    created() {
    },
    mounted: init
  }
</script>

<style scoped>

</style>
