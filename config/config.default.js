module.exports = appInfo => {
    const config = {}

    config.test = {
        key: 'syllabus-test-key'
    }

    /**
     * 小程序无需开启csrf
     */
    config.security = {
        csrf: false
    }
    /**
     * errCatch中间件配置
     * 默认不返回错误信息给客户端
     */
    config.errCatch = {
        responseErrorMsg: false
    }

    // 默认错误码配置，需要覆盖
    config.errCode = {
        APP_ERROR_CODE: '00',   // 应用错误码
        NOT_REGISTER_ERROR: '000000', // 未登记默认错误码
    }

    // 前端socket代理配置
    config.socketProxy = {
        // server: 'http://localhost:7001'
    }

    // 输出json日志
    config.logger = {
        outputJSON: true
    }

    return config
}
