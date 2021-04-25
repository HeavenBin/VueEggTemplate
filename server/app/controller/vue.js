const fs = require('fs')
const path = require('path')
class VueController extends C {
  async index() {
    const { ctx } = this
    ctx.response.type = 'html'
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../public/index.html'))
  }
}

module.exports = VueController;
