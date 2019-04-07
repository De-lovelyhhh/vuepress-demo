
exports.keys = '123456'

// Mysql 配置
exports.sequelize = {
    dialect: 'mysql',
    host: 'cdb-7g2jy6qr.gz.tencentcdb.com',
    port: 10053,
    database: 'test',
    username: 'candy',
    password: 'Candy666a',
    timezone: '+08:00',
    operatorsAliases: false
}

exports.errCode = {
    APP_ERROR_CODE: '02',   // 应用错误码
    NOT_REGISTER_ERROR: '00000', // 未登记默认错误码
}

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.nj': 'nunjucks',
    },
}

exports.logger = {
    outputJSON: false
}

// exports.middleware = ['request','response']
