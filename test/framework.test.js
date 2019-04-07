const mock = require('egg-mock')

describe('test/framework.test.js', () => {
    let app
    before(() => {
        app = mock.app({
            baseDir: 'example',
            framework: true,
        })
        return app.ready()
    })

    after(() => app.close())

    afterEach(mock.restore)
    //
    // it('should GET /', async () => {
    //     let response = await app.httpRequest()
    //         .get('/')
    //     // response = await app.httpRequest()
    //     //     .get('/')
    //     return response.text
    // })

    it('should GET /', async () => {
        let response = await (app.httpRequest()
            .get('/request'))
        return response.text
    })

    it('should GET /render', async () => {
        let response = await (app.httpRequest()
            .get('/render'))
        return response.text
    })

    it('should POST /render, 检查request中间件post请求的body', async () => {
        let response = await app.httpRequest()
            .post('/request')
            .type('form')
            .send({
                foo: 'bar',
                test: '666'
            })
            .expect(200)
            .expect({})
        return response.text
    })

    it('should POST /db_sharding, 测试分表功能，增删改查', async () => {
        const name = Date.now().toString()
        let response = await app.httpRequest()
            .get(`/db_sharding?name=${name}`)
            .expect(200)
            .expect({ firstName: name, semester: name, code: '0' })
        return response
    })

})

