const path = require('path')
const R = require('ramda')

const check = R.curry((obj, key) => {
  return typeof obj[key] !== 'undefined'
})

const notInGlobal = key => !check(global,key)


function globalInitial(baseDir) {
  const _use = dir => require(path.resolve(baseDir,dir))
  if(notInGlobal('check')){
    global.check = check
  }

  if (notInGlobal('use')) {
    global.use = dir => {
      dir = dir.replace(/\./g, path.sep)
      return _use(dir)
    }
  }

  if (notInGlobal('DEV')) {
    global.DEV = process.env.NODE_ENV !== 'production'
  }

  if (notInGlobal('Controller')) {
    global.C = global.Controller = require('egg').Controller
  }

  if (notInGlobal('Service')) {
    global.S = global.Service = require('egg').Service
  }
}

function globalLogger(app) {
  if (DEV) {
    global.debug = app.logger.debug.bind(app.logger)
    global.info = app.logger.info.bind(app.logger)
    global.warn = app.logger.warn.bind(app.logger)
    global.error = app.logger.error.bind(app.logger)
  } else {
    global.info = () => {}
    global.debug = () => {}
    global.warn = () => {}
    global.error = () => {}
  }
}

module.exports = {
  globalInitial,
  globalLogger
}