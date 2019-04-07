
/** @type Egg.EggPlugin */
module.exports = {
    // 开启模板引擎
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks'
    },

    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
}
