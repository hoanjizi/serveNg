const News = require('../../models/news/news.model')
const DanhGia = require('../../models/danhgia/danhgia.model')
const ExpressError = require('../../models/error.model')
const ViewModel = require('../../viewmodels/viewmodels.js')
const User = require('../../models/user/users.model')

exports.createDanhGia = (req) => {
    let file = req.files.file
    if (file != undefined) {
        let nameformat = file.name.replace(/[^A-Z0-9.]+/ig, "_");
        file.mv(__dirname + "/file/" + nameformat, (err) => {
            if (err) return;
            let danhgia = new DanhGia({
                tieuDe: req.body.tieuDe,
                danhGiaContent: req.body.danhGiaContent,
                mucDo: req.body.mucDo,
                tenFile: nameformat
            })
            return danhgia.save().then(() => {
                return News.findByIdAndUpdate(req.body.idNews, { $set: { trangthaiDaDanhGia: true } })
            })

        })
    }
}
exports.getAllDanhGia = (req) =>{
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