
class UserController extends C {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findAll();
  }
  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const user = await ctx.model.User.create({ name });
    ctx.status = 201;
    ctx.body = user;
  }
}

module.exports = UserController;
