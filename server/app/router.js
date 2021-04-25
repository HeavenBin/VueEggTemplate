module.exports = app => {
  const { router, controller } = app;

  router.resources('user','/api/v1/user', controller.user)

  //   exports.index = async () => {};    // GET     /posts            posts       app.controllers.posts.index
  //   exports.new = async () => {};      // GET     /posts/new        new_post    app.controllers.posts.new
  //   exports.show = async () => {};     // GET     /posts/:id        post        app.controllers.posts.show
  //   exports.edit = async () => {};     // GET     /posts/:id/edit   edit_post   app.controllers.posts.edit
  //   exports.create = async () => {};   // POST    /posts            posts       app.controllers.posts.create
  //   exports.update = async () => {};   // PUT     /posts/:id        post        app.controllers.posts.update
  //   exports.destroy = async () => {};  // DELETE  /posts/:id        post        app.controllers.posts.destroy

  // 服务端渲染
  router.get('/view', controller.view.index)

  // 部署Vue
  router.get('/vue', controller.vue.index)
};
