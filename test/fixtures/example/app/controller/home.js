const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg'
        throw this.ctx.helper.createError(new Error('error'), this.app.errCode.test.test)

    }

    async request() {
        this.ctx.body = await this.ctx.helper.request({
            url: 'https://easy-mock.com/mock/59919f40a1d30433d861b381/goods/good',
            // url: 'https://www.baidu.com',
            method: 'GET',
            header: {
                test: '123'
            }
        })
    }

    async render() {
        await this.ctx.render('test.nj', {
            data: 'test'
        })
    }

    async sharding() {
        const { app, ctx } = this
        const User = app.model.User
        await User.create({
            firstName: ctx.query.name,

        })
        await User.upsert({
            firstName: ctx.query.name,
            semester: ctx.query.name + '-----',
        })
        await User.update({
            semester: ctx.query.name,
        }, {
            where: { firstName: ctx.query.name }
        })
        const user = await User.findOne({ where: { firstName: ctx.query.name } })
        const users = await User.findAll({ where: { firstName: ctx.query.name } })
        await User.destroy({
            where: {
                firstName: ctx.query.name,
            }
        })
        ctx.body = user.toJSON()
    }
}

module.exports = HomeController
