<template>
  <div class="hone">
    <div class="head">
        <div class="search">
          <input type="text" placeholder="请输入楼盘名称" />
          <i class="icon"></i>
        </div>
      </div>
      <div class="title">
        <em>房产资讯</em>
      </div>
      <tab-control :titles="title" 
                    @tabClick='tabClick'></tab-control>

      <buttons v-if="currentindex===0" 
              :index="currentindex" 
              @btn-Click="BtnAddress"
              @tabcontrol="tabcontrol"></buttons>

      <btn-address v-if="currentindex===1"
                    :addressIndex="Index"
                    @addressclick="addressclick"></btn-address>


      <list></list>
  </div>
</template>
<script>
import TabControl from '../../components/tabcontrol'
import List from './list'
import Buttons from './button'
import BtnAddress from './address'
export default {
  name: "home",
  components:{
    TabControl,
    List,
    Buttons,
    BtnAddress
  },
  data() {
    return {
      title: ['城市','地区','价格'],
      Index: 0,
      isShow: false,
      currentindex: 0
    };
  },
  
  methods:{
    tabClick(index){
      this.currentindex = index;

    },
    BtnAddress(index){
      console.log(index);
        this.Index = index
    },
    tabcontrol(name){
      this.title.splice(0,1,name)
      this.title.splice(1,1,'地区')
      this.currentindex = ''
    },
    addressclick(name){
      this.title.splice(1,1,name) 
      this.currentindex = ''
    }
    },
};
</script>
<style scoped>

  .head {
    position: relative;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    background: url(../../assets/img/logo.jpg) center no-repeat
  }
  .search {
    position: absolute;
    top: 10px;
    width: 90%;
  }
  input {
    width: 95%;
    height: 30px;
    outline: none;
    border: none;
    padding: 3px 10px;
    background-color:rgba(255, 255, 255, .5);
  }
  .title{
    font-size: 18px;
    color: red;
    text-indent: 1em;
    padding: 5px 0;
    font-style: '华文中宋';
    font-weight: bold;
    border-bottom: 10px solid #f3ecec;
  }
</style>
