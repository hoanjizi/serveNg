const urlEncode =  require('body-parser').urlencoded({ extended: true })
const Notifi = require('../../controllers/notification/notification.controller')
module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/notifi/createNotifi',urlEncode, Wraper("CreateNotifi",Notifi.createNotifi,true))
    app.get('/notifi/getThreeNotifi', Wraper("getThreeNotifi",Notifi.findThreeNotifi,false))
    app.get('/notifi/getNotifiId', Wraper("getNotifiId",Notifi.findNotifiId,false))
    app.get('/notifi/getCountPage', Wraper("countPage",Notifi.getCountPage,false))
    app.get('/notifi/getFiveNotifi', Wraper("fiveNotifi",Notifi.findFiveNotifi,false))
}