module.exports = app => {
    const { STRING } = app.Sequelize

    // return app.model.define('User', {
    //     id: {
    //         type: STRING(32),
    //         primaryKey: true,
    //         allowNull: false,
    //         unique: true,
    //     },
    //     info: JSON
    // }, {
    //     tableName: 'user', // oauth_users
    //     timestamps: true,
    //     underscored: true,
    // })

    const User =  app.model.define('user', {
        firstName: {
            type: STRING,
            primaryKey: true
        },
        semester: {
            type: STRING
        }
    }, {
        tableName: 'user',
        timestamps: false,
    })
    // app.helper
    // app.dbSharding(User)
    return User
}
