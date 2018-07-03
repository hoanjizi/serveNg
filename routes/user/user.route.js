const urlEncode =  require('body-parser').urlencoded({ extended: true })
const users = require('../../controllers/user/user.controller.js')
module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/users',urlEncode, Wraper("insertuser",users.createUser,false))
    app.get('/users', Wraper("getuser",users.findAllUser,true))
    app.post('/login',urlEncode,Wraper("Login", users.findOneUser,false))

}