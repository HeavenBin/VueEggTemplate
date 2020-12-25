module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  pages: undefined,
  lintOnSave: process.env.NODE_ENV !== "production", // 生产时不检测
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false, // 加快构建速度
  crossorigin: undefined,
  integrity: false,
  configureWebpack: config => {
    // 对象则用webpack-merge,函数则是直接修改
  },
  chainWebpack: config => {
    // 更详细的修改
  },
  css: {
    modules: false,
    extract: process.env.NODE_ENV === "production",
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/css/variables";`
      }
    }
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 80,
    https: false,
    hotOnly: true
    // proxy: {
    //   "/api": {
    //     target: "http://127.0.0.1:7001/api/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // }
  },
  parallel: require("os").cpus().length > 1,
  pwa: {},
  pluginOptions: {}
};
