/*
* 为每个请求分配一个唯一的请求id
* create by candychuang on 2019/1/19
*/
const shortid = require('shortid')

module.exports = options => {
    return async function traceId(ctx, next) {
        // 设置请求id
        ctx.tracer = { traceId: shortid.generate() }
        await next()
    }
}
