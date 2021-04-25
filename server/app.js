const { globalInitial, globalLogger } = require('./init')

globalInitial(__dirname)
module.exports = async app => {
  globalLogger(app)
}
