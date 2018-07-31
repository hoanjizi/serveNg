const urlEncode =  require('body-parser').urlencoded({ extended: true })
const danhGiaChiDinhCtl = require('../../controllers/danhgiachidinh/danhgiachidinh.controller')

module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/danhgiachidinh/createDanhGiaChiDinh',urlEncode, Wraper("createDanhGiaChiDinh",danhGiaChiDinhCtl.createDanhGiaChiDinh,true))
    app.get('/danhgiachidinh/getIdOfUser', Wraper("getIdOfUser",danhGiaChiDinhCtl.getIdOfUser,true))

}