
class ViewController extends C {
  async index() {
    const dataList = {
      list: [
        { id: 1, title: 'this is view 1', url: '/view/1' },
        { id: 2, title: 'this is view 2', url: '/view/2' }
      ]
    };
    await this.ctx.render('list.tpl', dataList);
  }
}

module.exports = ViewController;