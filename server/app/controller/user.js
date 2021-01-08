
class UserController extends C {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findAll();
  }
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(ctx.params.id);
  }
  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const user = await ctx.model.User.create({ name });
    ctx.status = 201;
    ctx.body = user;
  }
  async update() {
    const ctx = this.ctx;
    const user = await ctx.model.User.findByPk(ctx.params.id);
    if (!user) {ctx.status = 404;return;}
    const { name } = ctx.request.body;
    await user.update({ name });
    ctx.body = user;
  }
  async destroy() {
    const ctx = this.ctx;
    const user = await ctx.model.User.findByPk(ctx.params.id);
    if (!user) { ctx.status = 404; return; }
    ctx.body = await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
