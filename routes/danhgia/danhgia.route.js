const urlEncode =  require('body-parser').urlencoded({ extended: true })
const danhGiaCtl = require('../../controllers/danhgia/danhgia.controller')

module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/danhgia/createDanhGia',urlEncode, Wraper("createDanhGia",danhGiaCtl.createDanhGia,true))
    app.get('/danhgia/getAllDanhGia', Wraper("getAllDanhGia",danhGiaCtl.getAllDanhGia,true))
    app.get('/danhgia/getBaiDanhGia', Wraper("getBaiDanhGia",danhGiaCtl.getBaiDanhGia,true))
    app.get('/danhgia/getDanhGiaReviewer', Wraper("getDanhGiaReviewer",danhGiaCtl.getDanhGiaReviewer,true))
    app.get('/danhgia/updateTrangThai', Wraper("updateTrangThai",danhGiaCtl.updateTrangThai,true))
    app.get('/danhgia/getDanhGiaTrangThaiTrue', Wraper("getDanhGiaTrangThaiTrue",danhGiaCtl.getDanhGiaTrangThaiTrue,true))


    app.get('/danhgia/download/:ten', danhGiaCtl.downloadFile)
}