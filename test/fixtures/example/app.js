const assert = require('assert')

module.exports = app => {
    // app.config.coreMiddleware.splice(0, 0, 'request','errCatch', 'response')
    // console.log(app.config.coreMiddleware)
    app.dbSharding(app.model.User)
}