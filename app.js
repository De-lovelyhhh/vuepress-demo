const path = require('path')

module.exports = app => {
    // 插入中间件
    app.config.coreMiddleware.push('traceId', 'render', 'request', 'response', 'errCatch')

    // 未捕获的promise错误
    process.on('unhandledRejection', reason => {
        app.logger.error(reason)
    })

    try {
        // 加载错误码文件
        const errCode = require(path.join(app.config.baseDir, 'config/errCode.js'))
        for (let index in errCode) {
            if (Object.prototype.hasOwnProperty.call(errCode, index)) {
                errCode[index] = new Proxy(errCode[index], {
                    get: function (target, prop, receiver) {
                        return (target.code || '0000') + (Reflect.get(...arguments) || '00')
                    }
                })
            }
        }
        app.errCode = errCode

    } catch (err) {
        app.logger.warn('can not load errCode file')
    }
}
