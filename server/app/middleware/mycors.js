
// app/middleware/mycors.js
module.exports = options => {
  console.log(options);  // { test: 111 }
  return async function corsFun(ctx, next) {
    await next()
    // 简单请求
    ctx.response.set('Access-Control-Allow-Origin', '*')
    ctx.response.set('Access-Control-Allow-Credentials', true)
    ctx.response.set('Cache-Control','no-cache')
    // ctx.response.set('Expires',new Date(2021, 2, 12, 06, 12, 00).toUTCString())
    ctx.response.set('Last-Modified',new Date(2021, 2, 12, 06, 12, 00).toUTCString())
    // 非简单请求
    if(ctx.method === 'OPTIONS'){
      ctx.response.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,PATCH')
      ctx.response.set('Access-Control-Allow-Headers', 'content-type')
      ctx.status = 204
    }
  }
}
// 使用插件egg-cors的204响应头
// HTTP/1.1 204 No Content
// Vary: Origin
// Access-Control-Allow-Origin: *
// Access-Control-Allow-Methods: GET,HEAD,PUT,POST,DELETE,PATCH
// Access-Control-Allow-Headers: content-type
// Date: Thu, 11 Mar 2021 19:49:51 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5
