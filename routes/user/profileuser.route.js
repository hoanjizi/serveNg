const Wraper = require('../../infras/wraper.infras')
const ProfileUserCtrl = require('../../controllers/user/profileuser.controller')
module.exports = (app)=>{
    app.put('/update/profile/:iduser',Wraper('updateprofile',ProfileUserCtrl.updateProfileUser,true))
    app.get('/profile/:iduser',Wraper('getprofile',ProfileUserCtrl.readProfile,true))
    app.put('/update/img/:iduser',Wraper('updateimg',ProfileUserCtrl.updateImageProfile,false))
}