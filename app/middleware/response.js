module.exports = options => {
    return async function response(ctx, next) {

        await next()

        let body
        switch (true) {
            case !!ctx.renderPage:
                // 调用ctx.render返回html页面
                // 记录请求的返回结果
                ctx.logger.info(`Response ${Date.now() - ctx._beginTime}ms: Page: ${ctx.renderPage.view} / data: ${JSON.stringify(ctx.renderPage.data)}`)
                break
            case typeof ctx.body === 'object':
                // 如果没有设置错误码，则将code设为0，表示无错误
                if (!ctx.body.code) {
                    ctx.body.code = '0'
                }
                body = JSON.stringify(ctx.body)
                // 记录请求的返回结果
                ctx.logger.info(`Response ${Date.now() - ctx._beginTime}ms: ${body}`)
                break
            default:
                body = ctx.body
                // 记录请求的返回结果
                ctx.logger.info(`Response ${Date.now() - ctx._beginTime}ms: ${body}`)
        }

    }
}
