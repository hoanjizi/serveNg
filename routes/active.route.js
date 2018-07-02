const active = require('../controllers/user/active.controller')
const Wraper = require('../infras/wraper.infras.js');
const urlEncode =  require('body-parser').urlencoded({ extended: true })
module.exports = (app)=>{
    app.get('/active/:token',Wraper('active',active.updateVeried,false))
}