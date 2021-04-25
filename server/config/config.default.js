exports.keys = '123456'

exports.security = {
  csrf: {
    enable: false
  },
}
// exports.cors = {
//   origin: '*',
//   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
// };
exports.middleware = [ 'mycors','history' ]

exports.sequelize = {
  dialect: 'mysql',
  database: 'EggTemplate',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '123456',
}
exports.redis = {
  client: {
    port: 6379, // Redis port
    host: '127.0.0.1', // Redis host
    password: '',
    db: 1
  }
}

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  }
}

exports.static = {
  gzip: true
};
