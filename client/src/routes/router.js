import Vue from "vue";
import Router from "vue-router";
// import User from "@/views/user";
// import Main from "@/views/main";


Vue.use(Router);

const asyncView = view => () =>
  import(/* webpackChunkName: "v-[request]" */ `@/views${view}`);

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
      path: "/main",
      name: "main",
      component: asyncView("/main"),
      mete: { keepAlive: true }
    },
    {
      path: "/upload",
      name: "upload",
      component: asyncView("/upload")
    },
    {
      path: "/mock",
      name: "mock",
      component: asyncView("/mock")
    },
    {
      path: "*",
      redirect: "/mock"
    }
  ]
})

routerInstance.beforeEach((to, from, next) => {
  // 全局前置守卫
  next();
})

export default routerInstance;
