import Vue from "vue";
import App from "@/App.vue";
import router from "@/routes/router";
import store from "@/stores/store";
import "@/assets/css/common.scss";
// import "@/plugins/js/test";

import { add } from "haibin007";
console.log(add(1,2));




Vue.config.productionTip = false;

// 暂时用节流方式来防抖
Vue.directive('noRepeat', {
  inserted (el, binding) {
    el.addEventListener('click', () => {
      if (!el.repeat) {
        el.repeat = true;
        setTimeout(() => {
          el.repeat = false
        }, binding.value || 2000)
      }
    })
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
