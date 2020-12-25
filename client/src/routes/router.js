import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const asyncView = view => () =>
  import(/* webpackChunkName: "view-[request]" */ `@/views${view}`);

const routerInstance = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      name: "user",
      component: asyncView("/user"),
      mete: { keepAlive: true }
    },
    {
      path: "*",
      redirect: "/user"
    }
  ]
})

routerInstance.beforeEach((to, from, next) => {
  // 全局前置守卫
  next();
})

export default routerInstance;
