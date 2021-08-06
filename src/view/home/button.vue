<template>
  <div class="button">
    <div class="btn">
      <button v-for="(item, index) in btnList" :key="index" @click="btnlistClick(item.name,index)">
        {{ item.name }}
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "bnt-button",
  props:{
    index:{
       type:Number,
    }
  },
  data() {
    return {
      btnList: []
    };
  },
  created() {
    axios.get("http://jiekou.ydsjt.cn/test.php?act=area").then((res) => {
      //console.log(res);
      this.btnList = res.data.data
    });
  },
  methods:{
    btnlistClick(name,index){
      this.$emit('btn-Click',index)
      this.$emit('tabcontrol',name)
    }
  }
};
</script>
<style scoped>

.btn{
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 20px 0 0;
}
button{
  width: 22%;
  height: 30px;
  padding: 5px 0;
  margin: 5px;
  line-height: 15px;
  border: none;
  background-color: rgb(240, 240, 238);
}

</style>
