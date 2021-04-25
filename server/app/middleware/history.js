const fs = require('fs')
const path = require('path')
module.exports = options => {
  return async function history(ctx, next) {
    await next()
    if(~ctx.request.url.indexOf('/public')){
      ctx.response.type = 'html'
      ctx.body = fs.readFileSync(path.resolve(__dirname, '../public/index.html'))
    }
  }
}
