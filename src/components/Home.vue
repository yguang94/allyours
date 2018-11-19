import index from "../router";
<template>
  <div class="home_wrap">
    <div class="homeTitle_warp">
      <div class="heaer_focus">
        <div class="MaxWidth" style="height: 100%">
          <div class="header_text">
            <span class="header_text1">呼朋唤友</span>
            <span class="header_text1">ETH 夺不停</span>
            <span class="header_text2">100% 公平夺奖</span>
          </div>
        </div>
      </div>
    </div>
    <div class="homeContent_warp MaxWidth">
      <!--小试牛刀-->
      <div class="primary_warp">
        <span class="contentHeader_icon"></span>
        <span class="contentHeader_text">小试牛刀</span>
        <div class="home_card_warp">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(data,index) in primaryDataList" :key="index">
              <el-card class="box-card">
                <div class="home_card_headerImg">
                  <span>{{data.name}}</span>
                </div>
                <div class="home_card_content">
                  <span class="home_card_content_text1">赢取{{data.bonusPool}}ETH (以太坊)</span>
                  <span class="home_card_content_text2">{{data.periodCurrent}}期</span>
                  <span class="home_card_content_text3">仅限{{data.price}}ETH/人次</span>
                  <el-progress :percentage="data.progressNum" :stroke-width="10"
                               :show-text='false' color="#FA52FC"></el-progress>
                  <span class="home_card_content_text4">揭晓进度: {{data.progressNum}}%</span>
                </div>
                <div class="home_card_button_warp">
                  <span class="home_card_button">
                    <router-link tag="div" :to="{name:'details', params:{bonusData:data} }">立即夺宝</router-link>
                  </span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--大显身手-->
      <div class="intermediate_warp">
        <span class="contentHeader_icon"></span>
        <span class="contentHeader_text">大显身手</span>
        <div class="home_card_warp">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(data,index) in intermediateDataList" :key="index">
              <el-card class="box-card">
                <div class="home_card_headerImg">
                  <span>{{data.name}}</span>
                </div>
                <div class="home_card_content">
                  <span class="home_card_content_text1">赢取{{data.bonusPool}}ETH (以太坊)</span>
                  <span class="home_card_content_text2">{{data.periodCurrent}}期</span>
                  <span class="home_card_content_text3">仅限{{data.price}}ETH/人次</span>
                  <el-progress :percentage="data.progressNum" :stroke-width="10"
                               :show-text='false' color="#FA52FC"></el-progress>
                  <span class="home_card_content_text4">揭晓进度: {{data.progressNum}}%</span>
                </div>
                <div class="home_card_button_warp">
                  <span class="home_card_button">
                    <router-link tag="div" :to="{name:'details', params:{bonusData:data} }">立即夺宝</router-link>
                  </span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--终极大奖-->
      <div class="ultimate_warp">
        <span class="contentHeader_icon"></span>
        <span class="contentHeader_text">终极大奖</span>
        <div class="home_card_warp">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(data,index) in ultimateDataList" :key="index">
              <el-card class="box-card">
                <div class="home_card_headerImg">
                  <span>{{data.name}}</span>
                </div>
                <div class="home_card_content">
                  <span class="home_card_content_text1">赢取{{data.bonusPool}}ETH (以太坊)</span>
                  <span class="home_card_content_text2">{{data.periodCurrent}}期</span>
                  <span class="home_card_content_text3">仅限{{data.price}}ETH/人次</span>
                  <el-progress :percentage="data.progressNum" :stroke-width="10"
                               :show-text='false' color="#FA52FC"></el-progress>
                  <span class="home_card_content_text4">揭晓进度: {{data.progressNum}}%</span>
                </div>
                <div class="home_card_button_warp">
                  <span class="home_card_button">
                    <router-link tag="div" :to="{name:'details', params:{bonusData:data} }">立即夺宝</router-link>
                  </span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--慈善-->
      <div class="charity_warp" style="padding: 0 10px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
               <span class="charity_text1">
                <i class="el-icon-info" style="color: #FF8C28"></i> 温馨提示
               </span>
              <span class="charity_text2">All yours夺宝携手For dreams创办慈善基金会。所有夺宝活动奖励的10%会用于慈善捐助基金。All yours夺宝感谢您的捐助！</span>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer_wrap MaxWidth">
      <el-row>
        <el-col :span="24">
          <span class="footerText" style="color: #000">@2018 All yours保留所有权利</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Web3 from 'web3'

  function init() {
    this.init_()
  }

  function init_() {
    let that = this
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
    let address1 = that.primaryDataList[0].address;
    let address2 = that.primaryDataList[1].address;
    let address3 = that.primaryDataList[2].address;
    let address4 = that.primaryDataList[3].address;
    let address5 = that.primaryDataList[4].address;
    let address6 = that.primaryDataList[5].address;
    let address7 = that.primaryDataList[6].address;
    let address8 = that.intermediateDataList[0].address;
    let address9 = that.intermediateDataList[1].address;
    let address10 = that.intermediateDataList[2].address;
    let address11 = that.ultimateDataList[0].address;

    //通过ABI和地址获取已部署的合约对象
    let AllYoursContract1 = new web3.eth.Contract(abi,address1);
    let AllYoursContract2 = new web3.eth.Contract(abi,address2);
    let AllYoursContract3 = new web3.eth.Contract(abi,address3);
    let AllYoursContract4 = new web3.eth.Contract(abi,address4);
    let AllYoursContract5 = new web3.eth.Contract(abi,address5);
    let AllYoursContract6 = new web3.eth.Contract(abi,address6);
    let AllYoursContract7 = new web3.eth.Contract(abi,address7);
    let AllYoursContract8 = new web3.eth.Contract(abi,address8);
    let AllYoursContract9 = new web3.eth.Contract(abi,address9);
    let AllYoursContract10 = new web3.eth.Contract(abi,address10);
    let AllYoursContract11 = new web3.eth.Contract(abi,address11);

    //*******************智能合约提供的接口******************
    //查看当期多少人参加了抽奖
    let LuckyNum1 = AllYoursContract1.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.primaryDataList[0].participateNum = result;
      that.primaryDataList[0].progressNum = result / that.primaryDataList[0].needNum * 100;
    });
    // 查看当期期数
    let periods1 = AllYoursContract1.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.primaryDataList[0].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum2 = AllYoursContract2.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.primaryDataList[1].participateNum = result;
      that.primaryDataList[1].progressNum = result / that.primaryDataList[1].needNum * 100;
    });
    // 查看当期期数
    let periods2 = AllYoursContract2.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.primaryDataList[1].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum3 = AllYoursContract3.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.primaryDataList[2].participateNum = result;
      that.primaryDataList[2].progressNum = result / that.primaryDataList[2].needNum * 100;
    });
    // 查看当期期数
    let periods3 = AllYoursContract3.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.primaryDataList[2].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum4 = AllYoursContract4.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.primaryDataList[3].participateNum = result;
      that.primaryDataList[3].progressNum = result / that.primaryDataList[3].needNum * 100;
    });
    // 查看当期期数
    let periods4 = AllYoursContract4.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.primaryDataList[3].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum5 = AllYoursContract5.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.primaryDataList[4].participateNum = result;
      that.primaryDataList[4].progressNum = result / that.primaryDataList[4].needNum * 100;
    });
    // 查看当期期数
    let periods5 = AllYoursContract5.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.primaryDataList[4].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum6 = AllYoursContract6.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.primaryDataList[5].participateNum = result;
      that.primaryDataList[5].progressNum = result / that.primaryDataList[5].needNum * 100;
    });
    // 查看当期期数
    let periods6 = AllYoursContract6.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.primaryDataList[5].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum7 = AllYoursContract7.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.primaryDataList[6].participateNum = result;
      that.primaryDataList[6].progressNum = result / that.primaryDataList[6].needNum * 100;
    });
    // 查看当期期数
    let periods7 = AllYoursContract7.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.primaryDataList[6].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum8 = AllYoursContract8.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.intermediateDataList[0].participateNum = result;
      that.intermediateDataList[0].progressNum = result / that.intermediateDataList[0].needNum * 100;
    });
    // 查看当期期数
    let periods8 = AllYoursContract8.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.intermediateDataList[0].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum9 = AllYoursContract9.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.intermediateDataList[1].participateNum = result;
      that.intermediateDataList[1].progressNum = result / that.intermediateDataList[1].needNum * 100;
    });
    // 查看当期期数
    let periods9 = AllYoursContract9.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.intermediateDataList[1].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum10 = AllYoursContract10.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.intermediateDataList[2].participateNum = result;
      that.intermediateDataList[2].progressNum = result / that.intermediateDataList[2].needNum * 100;
    });
    // 查看当期期数
    let periods10 = AllYoursContract10.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.intermediateDataList[2].periodCurrent = result;
    })

    //查看当期多少人参加了抽奖
    let LuckyNum11 = AllYoursContract11.methods.getCurrentJoinPersonNumber().call().then(function(result ){
      console.log("当前参加人数" + result);
      that.ultimateDataList[0].participateNum = result;
      that.ultimateDataList[0].progressNum = result / that.ultimateDataList[0].needNum * 100;
    });
    // 查看当期期数
    let periods11 = AllYoursContract11.methods.getPeriod().call().then(function (result) {
      console.log("当前期数" + result);
      that.ultimateDataList[0].periodCurrent = result;
    })



  }

  export default {
    components: {},
    props: {},
    data() {
      return {
        primaryDataList:[
          {
            name: '#1号',
            address: '0xf829c44f453b252579ec4d3ccc2d14e69f202098',
            periodCurrent:'',
            participateNum:'',
            price: '0.002',
            needNum:'500',
            bonusPool:'1',
            progressNum:0
          },
          {
            name: '#2号',
            address: '0xccb766ed3705b17694e18930ce283046dbd40e9a',
            periodCurrent:'',
            participateNum:'',
            price: '0.002',
            needNum:'500',
            bonusPool:'1',
            progressNum:0
          },
          {
            name: '#3号',
//            address: '0xb35468ae8a8567290c63d89962241875d7c40044',
            address: '0x928ea63f59dd0a82a1b887993452fd50fddfb779',
            periodCurrent:'',
            participateNum:'',
            price: '0.002',
            needNum:'500',
            bonusPool:'1',
            progressNum:0
          },
          {
            name: '#4号',
            address: '0xba216d6d2a979d005044d56d82b23ed82c134521',
            periodCurrent:'',
            participateNum:'',
            price: '0.002',
            needNum:'500',
            bonusPool:'1',
            progressNum:0
          },
          {
            name: '#5号',
            address: '0xf2f9bdf754dfd0eaf65c9ac8bc9225d2a384aadd',
            periodCurrent:'',
            participateNum:'',
            price: '0.002',
            needNum:'500',
            bonusPool:'1',
            progressNum:0
          },
          {
            name: '#6号',
            address: '0x3606db65824d9c9d0618776224a3849ae63803c3',
            periodCurrent:'',
            participateNum:'',
            price: '0.002',
            needNum:'500',
            bonusPool:'1',
            progressNum:0
          },
          {
            name: '#7号',
            address: '0xa6a530bac381c3a83aaebde3ac3d5751ce6fc103',
            periodCurrent:'',
            participateNum:'',
            price: '0.002',
            needNum:'500',
            bonusPool:'1',
            progressNum:0
          }
        ],
        intermediateDataList:[
          {
            name: '#1号',
            address: '0xa74fe1a00ee22c63a1ade3a35c9c8de2c5fcf65f',
            periodCurrent:'',
            participateNum:'',
            price: '0.01',
            needNum:'100',
            bonusPool:'1',
            progressNum:0
          },
          {
            name: '#2号',
            address: '0xd7e1c64a9177e9cd057e4da55d6f1766e0883b97',
            periodCurrent:'',
            participateNum:'',
            price: '0.1',
            needNum:'10',
            bonusPool:'1',
            progressNum:0

          },
          {
            name: '#3号',
            address: '0xace8adf59a62151bfb126e76db6fd884dd66a337',
            periodCurrent:'',
            participateNum:'',
            price: '1',
            needNum:'5',
            bonusPool:'5',
            progressNum:0
          }
        ],
        ultimateDataList:[
          {
            name: '#1号',
            address: '0x8f6fbcd674bf103882d18a7921f653ea6f461ee1',
            periodCurrent:'',
            participateNum:'',
            price: '0.01',
            needNum:'1000000',
            bonusPool:'10000',
            progressNum:0
          }
        ]
      }
    },
    watch: {},
    computed: {},
    methods: {
      init_
    },
    created() {
    },
    mounted:init
  }
</script>

<style scoped>

</style>
