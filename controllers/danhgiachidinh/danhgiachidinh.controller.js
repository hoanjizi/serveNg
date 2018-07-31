const News = require('../../models/news/news.model')
const DanhGiaChiDinh = require('../../models/danhgiachidinh/danhgiachidinh.model')
const ExpressError = require('../../models/error.model')
const ViewModel = require('../../viewmodels/viewmodels.js')
const User = require('../../models/user/users.model')

exports.createDanhGiaChiDinh = (req) => {
    let rtl, t
    let arrayIdUser = req.body.arrayIdUser
    if (arrayIdUser != undefined) {
        arrayIdUser.forEach(async function (element) {
            let danhgiachidinh = new DanhGiaChiDinh({
                idNews: req.body.idNews,
                idUser: element.id
            })
            rtl = await danhgiachidinh.save()
            t = await News.findByIdAndUpdate(req.body.idNews, { trangthai: true })
        });
    }
    if (rtl != undefined && t != undefined) {
        return ViewModel.viewmodels.message('ok')
    }

}
exports.getIdOfUser = (req) => {
    return DanhGiaChiDinh.find({ idUser: req.query.idUser, trangThai: false }).then(rtl => {
        return ViewModel.viewmodelsDanhGiaChiDinh.getDanhGiaChiDinh(rtl)
    })

}