
module.exports = app => {
    const { router, controller } = app

    router.get('/', controller.home.index)

    router.get('/request', controller.home.request)
    router.get('/render', controller.home.render)
    router.post('/request', controller.home.render)
    router.get('/db_sharding', controller.home.sharding)
}
