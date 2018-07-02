const urlEncode =  require('body-parser').urlencoded({ extended: true })
module.exports = (app) => {
    const listuser = require('../controllers/listuser.controller.js')
    const Wraper = require('../infras/wraper.infras.js')
    //app.post('/listusers',urlEncode,Wraper("UserService","createListUser",false));
    app.post('/listusers',urlEncode,Wraper("UserService",listuser.createListUser,false))
    app.get('/listusers', Wraper("listuser",listuser.findAllListUser,true))
    //app.get('/listusers/:userid', Wraper("UserService","findOneListUser",false));
    app.get('/listusers/:userid', Wraper("UserService",listuser.findOneListUser,true))
}

/*

getEntity("objectType", "getMethod")
getEntity("User", "findById",){
    object["medhot"]()
}

*/