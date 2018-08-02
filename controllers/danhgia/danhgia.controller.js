const News = require('../../models/news/news.model')
const DanhGia = require('../../models/danhgia/danhgia.model')
const ExpressError = require('../../models/error.model')
const ViewModel = require('../../viewmodels/viewmodels.js')
const User = require('../../models/user/users.model')
const DGCD = require('../../models/danhgiachidinh/danhgiachidinh.model')

exports.createDanhGia = (req) => {
    let file = req.files.file
    if (file != undefined) {
        let nameformat = file.name.replace(/[^A-Z0-9.]+/ig, "_");
        file.mv(__dirname + "/file/" + nameformat, (err) => {
            if (err) return;
            return User.findById(req.body.idUser).then(rtl =>{
                let danhgia = new DanhGia({
                    tieuDe: req.body.tieuDe,
                    danhGiaContent: req.body.danhGiaContent,
                    mucDo: req.body.mucDo,
                    idNews: req.body.idNews,
                    idUser: req.body.idUser,
                    nickname: rtl.nickname,
                    username: rtl.username,
                    tenFile: nameformat
                })
                return danhgia.save().then(() => {
                    return News.findByIdAndUpdate(req.body.idNews, { $set: { trangthaiDaDanhGia: true } }).then(() => {
                        return DGCD.findByIdAndUpdate(req.body.idDG, { $set: { trangThai: true } }).then(()=>{
                            return ViewModel.viewmodels.message('ok')
                        })
                    })
                })
            })
            

        })
    }
}
exports.getAllDanhGia = (req) => {
    return DanhGia.find().then(rtl => {
        return ViewModel.viewmodelsDanhGia.getAllDanhGia(rtl);
    })
}
exports.downloadFile = (req, res) => {
    res.download(__dirname + "/file/" + req.params.ten)
}
exports.getBaiDanhGia = (req) => {
    return DanhGia.findById(req.query.idDanhGia).then(rtl => {
        return ViewModel.viewmodelsDanhGia.getAllDanhGia(rtl);
    })

}
exports.getDanhGiaReviewer = (req)=>{
    return DanhGia.find({idNews: req.query.idNews}).then(rtl=>{
        return ViewModel.viewmodelsDanhGia.getAllDanhGia(rtl);
    })
}