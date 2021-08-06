<template>
  <div class="tab-control">
    <div class="items" v-for="(item,index) in titles" :key="index"
        :class="{active : index === currindex}"
        @click="itemClick(index)">
      <span>{{item}}</span>
      <i class="iconfont">&#xe625;</i>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabcontrol",
  props:{
     titles:{
       type: Array,
       return: []
     }
  },
  data () {
    return {
      currindex: 0
    };
  },
  methods:{
   itemClick(index){
     this.currindex = index;
     this.$emit('tabClick', index)
   }
  } 
}
</script>
<style scoped>
@import 'http://at.alicdn.com/t/font_2722837_18fnxdacrsv.css';
  .tab-control{
    display: flex;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc 
  }
  .items{
      flex: 1;
      color: #8a8a8a;
    }
    .active{
      color: rgb(99, 161, 225);
    }
</style>