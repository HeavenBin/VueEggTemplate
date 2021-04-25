<template>
  <div class='main'>
    mainmainmain
  </div>
</template>

<script type='text/javascript'>
export default {
  name: 'main',
  components: {},
  filters:{},
  directives: {},
  mixins: [],

  data() {return {}},
  props: {},
  computed: {},
  watch: {},
  methods: {},

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
  .main{

  }
</style>
