let oldRender
module.exports = options => {
    return async function render(ctx, next) {
        if (!oldRender) {
            oldRender = ctx.render
        }
        // 重新封装render
        ctx.render = async function (...args) {
            ctx.renderPage = {
                view: args[0],
                data: args[1] || {}
            }
            await oldRender.apply(ctx, args)
        }

        await next()
    }
}
