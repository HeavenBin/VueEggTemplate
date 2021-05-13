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

  created() {

  },
  mounted() {},
};
</script>

<style lang='scss' scoped>
.upload{
  img{
    width: 200px;
  }
}
</style>
