<template>
  <div class='upload'>
    <img v-for='(item,index) in imgShow' :key='index' :src="item" alt="">
    <input class="up-file" @change="getFile" multiple type="file" name="upload" id="upload">
    <div class="botton" @click="upload">点击上传</div>
  </div>
</template>

<script type='text/javascript'>
export default {
  name: 'upload',
  components: {},
  filters:{},
  directives: {},
  mixins: [],

  data() {return {
    files: [],
    imgShow: []
  }},
  props: {},
  computed: {},
  watch: {},
  methods: {
    getFile(e){
      this.files = [].slice.call(e.target.files);
      this.files.forEach(v=>{
        const reader = new FileReader()
        reader.readAsDataURL(v)
        reader.onload = (e)=>{
          this.imgShow.push(e.target.result)
          console.log(e,this.imgShow);
        }
      })
    },
    upload(){
      const formData = new FormData()
      this.files.forEach(v=>formData.append('fileUpload',v))
    }
  },

  beforeCreate() {},    // el,data未初始化   初始化全局属性
  created() {},         // el未初始化,data初始化   初始化传入属性
  beforeMount() {},     // el,data初始化,未挂载(虚拟DOM)   生成rander()
  mounted() {},         // 完成挂载(data绑定到DOM上了)   生成真实DOM()
  beforeUpdate() {},    // (更新前)   data变化触发
  updated() {},         // (更新后)
  beforeDestroy() {},   // (销毁前) 你确认删除XX吗？
  destroyed() {},       // (销毁后) 当前组件已被删除，清空相关内容
  activated() {},       // (keep-alive 组件激活时调用)
  deactivated() {},     // (keep-alive 组件停用时调用)
};
</script>

<style lang='scss' scoped>
.upload{
  img{
    width: 200px;
  }
}
</style>
