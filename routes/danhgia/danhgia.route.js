const urlEncode =  require('body-parser').urlencoded({ extended: true })
const danhGiaCtl = require('../../controllers/danhgia/danhgia.controller')

module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/danhgia/createDanhGia',urlEncode, Wraper("createDanhGia",danhGiaCtl.createDanhGia,true))
    app.get('/danhgia/getAllDanhGia', Wraper("getAllDanhGia",danhGiaCtl.getAllDanhGia,true))
    app.get('/danhgia/getBaiDanhGia', Wraper("getBaiDanhGia",danhGiaCtl.getBaiDanhGia,true))


    app.get('/danhgia/download/:ten', danhGiaCtl.downloadFile)
}