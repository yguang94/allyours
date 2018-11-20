<!--import index from "../router";-->
<template>
  <div class="histry_warp">
    <img class="history_headerimg" src="../assets/images/winhistoryR.png" alt="">
    <!--头部-->
    <div class="historyTitle_warp">
      <div class="heaer_placeholder"></div>
      <!--banner-->
      <div class="historyProgrsess_warp MaxWidth">
        <img src="../assets/images/gift.png" class="historyProgrsess_img" alt="">
        <span class="historyProgrsess_text">开奖历史</span>
      </div>
    </div>
    <!--内容-->
    <div class="historyContent_warp MaxWidth">
      <!--小试牛刀-->
      <div class="primary_warp">
        <span class="contentHeader_icon"></span>
        <span class="contentHeader_text">小试牛刀</span>
        <div class="home_card_warp">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(data , index) in primaryDataList" :key="index">
              <div class="history_button_warp">
                <span class="history_button">
                  <router-link tag="div" :to="{name:'historyContent', params:{addressData:data.address} }">{{data.name}} 奖池#</router-link>
                </span>
              </div>
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
              <div class="history_button_warp">
                <span class="history_button">
                  <router-link tag="div" :to="{name:'historyContent', params:{addressData:data.address} }">{{data.name}} 奖池#</router-link>
                </span>
              </div>
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
              <div class="history_button_warp">
                <span class="history_button">
                  <router-link tag="div" :to="{name:'historyContent', params:{addressData:data.address} }">{{data.name}} 奖池#</router-link>
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
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
  export default {
    components: {},
    props: {},
    data() {
      return {
        primaryDataList:[
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
          }
        ],
        intermediateDataList:[
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
          }
        ],
        ultimateDataList:[
          {
            name: '#1号',
            address: '0x8f6fbcd674bf103882d18a7921f653ea6f461ee1',
          }
        ]
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
    }
  }
</script>

<style scoped>

</style>
