<!--import index from "../router";-->
<template>
  <div class="histry_warp">
    <img class="history_headerimg" src="../assets/images/winhistoryR.png" alt="">
    <div class="historyTitle_warp">
      <div class="heaer_placeholder"></div>
      <!--banner-->
      <div class="historyProgrsess_warp MaxWidth">
        <img src="../assets/images/gift.png" class="historyProgrsess_img" alt="">
        <span class="historyProgrsess_text">开奖历史 {{addressData.name}}奖池</span>
      </div>
    </div>
    <!--内容-->
    <div class="historyContent_warp MaxWidth" v-loading="historyContentLoading">
      <!------------------------------如无数据----------------->
      <div v-if="this.noData === -1" class="noData_warp">
        <span class="noData_text">暂无开奖历史</span>
      </div>
      <!------------------------------------------------------>
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
                  <!--<el-form-item label="总需人次:">-->
                    <!--<div class="cardText">-->
                      <!--<span class="showWinHistoryContent_item">-->
                      <!--4人次-->
                      <!--</span>-->
                    <!--</div>-->
                  <!--</el-form-item>-->
                  <el-form-item label="合约地址:">
                    <div class="cardText">
                      <span class="showWinHistoryContent_item">
                      {{ addressData.address }}
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
  </div>
</template>

<script>
  import E from '../service/PCCommon'

  function init() {
    let that = this;
    that.addressData.address = '0xf829c44f453b252579ec4d3ccc2d14e69f202098';
    console.log(that.addressData.address);
    let i;
    for (i in that.dataList) {
      if (that.dataList[i].address === that.$route.params.addressData || that.dataList[i].address === that.addressData.address) {
        that.addressData = that.dataList[i];
        console.log(that.addressData);
      }
    }
    console.log(that.addressData.address);

    this.init_3();
  }

  //获取中奖信息
  function init_3() {
    let that = this;
    that.historyContentLoading = true;
    let url = 'module=account&action=txlistinternal&address=' + that.addressData.address + '&startblock=0&endblock=99999999&sort=desc'
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
      that.historyContentLoading = false;
    },function (d) {
      console.log(d);
      if (d === 'No transactions found') {
        that.noData = -1
        that.historyContentLoading = false;
      }
    })
  }


  export default {
    components: {},
    props: {},
    data() {
      return {
        historyList: [],
        DownloadAppVisible: false,
        noData: 0,
        historyContentLoading:false,
        addressData: {
          address:'',
          name: ''
        },
        dataList:[
          {
            name: '#1号',
            address: '0xf829c44f453b252579ec4d3ccc2d14e69f202098',
          },
          {
            name: '#2号',
            address: '0xccb766ed3705b17694e18930ce283046dbd40e9a',
          },
          {
            name: '#3号',
//            address: '0xb35468ae8a8567290c63d89962241875d7c40044',
            address: '0x928ea63f59dd0a82a1b887993452fd50fddfb779',
          },
          {
            name: '#4号',
            address: '0xba216d6d2a979d005044d56d82b23ed82c134521',
          },
          {
            name: '#5号',
            address: '0xf2f9bdf754dfd0eaf65c9ac8bc9225d2a384aadd',
          },
          {
            name: '#6号',
            address: '0x3606db65824d9c9d0618776224a3849ae63803c3',
          },
          {
            name: '#7号',
            address: '0xa6a530bac381c3a83aaebde3ac3d5751ce6fc103',
          },
          {
            name: '#1号',
            address: '0xa74fe1a00ee22c63a1ade3a35c9c8de2c5fcf65f',
          },
          {
            name: '#2号',
            address: '0xd7e1c64a9177e9cd057e4da55d6f1766e0883b97',
          },
          {
            name: '#3号',
            address: '0xace8adf59a62151bfb126e76db6fd884dd66a337',
          },
          {
            name: '#1号',
            address: '0x8f6fbcd674bf103882d18a7921f653ea6f461ee1',
          }
        ]
      }
    },
    watch: {},
    computed: {},
    methods: {
      init_3
    },
    created() {},
    mounted: init
  }
</script>

<style scoped>

</style>
