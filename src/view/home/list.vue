<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in list" :key="index">
          <img :src="item.image" alt="" />
          <div class="info">
            <p class="title">{{ item.name }}</p> 
            <p class="address">{{ item.address }}</p>
            <span class="price"><span>10000</span>元/㎡</span>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "list",
  data() {
    return {
      list: [],
    };
  },
  created() {
    axios.get("http://jiekou.ydsjt.cn/test.php?act=list").then((res) => {
      this.list = res.data.data;
    });
  },
  methods: {},
};
</script>
<style scoped>
ul {
  padding: 0;
}
li {
  list-style: none;
  width: 100%;
  height: 110px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
img {
  flex: 1;
  width: 110px;
  height: 90px;
  margin: 10px 15px;
}
.info{
  flex: 1.5;
  width: 60%;
  height: 110px;
  display: inline-block;
  vertical-align: top;
}
p{
  margin: 7px 0;
  padding: 0;
}
.title{
  font-weight: bold;
}
.address{
  color: #8a8a8a;
}
.price span{
  font-weight: 400;
  color: red;
}
</style>
