<template>
  <div class='mock'>

  </div>
</template>

<script type='text/javascript'>
import mock from '@/mock.js'
import axios from 'axios'

export default {
  name: 'mock',
  data() {return {}},
  created() {
    for(let i=0;i<10;i++){
      axios.post("/login").then(res=>{
      console.log(res.data);
    })
    }

    // axios.post("/list").then(res=>{
    //   console.log(res.data);
    // })
    // axios({ url: "/post", data: { test: '11111' } }).then(res=>{
    //   console.log(res.data);
    // })
  },
  mounted() {},
};
</script>

<style lang='scss' scoped>
  .mock{

  }
</style>
