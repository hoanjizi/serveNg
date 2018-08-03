const News = require('../../models/news/news.model')
const DanhGia = require('../../models/danhgia/danhgia.model')
const ExpressError = require('../../models/error.model')
const ViewModel = require('../../viewmodels/viewmodels.js')
const User = require('../../models/user/users.model')
const DGCD = require('../../models/danhgiachidinh/danhgiachidinh.model')

exports.createNews = (req, res) => {

    let file = req.files.file
    if (file != undefined) {
        let nameformat = file.name.replace(/[^A-Z0-9.]+/ig, "_");
        file.mv(__dirname + "/file/" + nameformat, (err) => {
            if (err)
                return new Promise.resolve().then(rtl => {
                    throw new ExpressError.BadRequest('bad request')
                })
            let news = new News({
                id: req.body.iduser,
                tieude: req.body.tieude,
                tacgia: req.body.tacgia,
                tukhoa: req.body.tukhoa,
                tomtat: req.body.tomtat,
                tenfile: nameformat
            })
            return news.save().then(rtl => {
                return ViewModel.viewmodels.message('ok')
            })

        })
        console.log('ok')
    }
}
exports.findNewsWithId = (req, res) => {
    return News.find({ id: req.query.id }).then(rtl => {
        return ViewModel.viewmodelsNews.getNewsWithid(rtl)
    })
}
exports.findNewsWithIdMongo = (req, res) => {
    return News.findById(req.query.id).then(rtl => {
        return ViewModel.viewmodelsNews.getNewsWithIdMongo(rtl)
    })
}
exports.downloadFile = (req, res) => {
    res.download(__dirname + "/file/" + req.params.ten)
}
exports.getNewsChuaDuyet = (req, res) => {
    return News.find({ trangthai: false }).then(rtl => {
        return ViewModel.viewmodelsNews.getNewsWithid(rtl)
    })
}
exports.createIdRoleUser = (req) => {
    let danhGia = new DanhGia({
        idNews: req.body.idNews,
        idUser: req.body.idUser
    })
    return danhGia.save().then(rtl => {
        return ViewModel.viewmodels.message('saved')
    })
}
exports.createIdUserDanhGia = (req) => {
    console.log(req.body)
    return News.findByIdAndUpdate(req.body.idNews, { idUserDanhGia: req.body.arrayIdUser, trangthai: true })
}

exports.getCountRoleUser = (req) => {
    return DanhGia.find({ idUser: req.query.idUser, idNews: req.query.idNews }).count().exec().then(count => {
        return ViewModel.viewmodelsNotifi.getCountPage(count)
    })
}

exports.updateStatusRoleUser = (req) => {
    return DanhGia.findOneAndUpdate({ idUser: req.body.idUser, idNews: req.body.idNews }, { $set: { status: true } }).then(res => {
        return ViewModel.viewmodels.message('updated')
    })
}

exports.getNewsTrangThaiTrue = (req) => {
    return News.find({ trangthai: true }).then(rtl => {
        return ViewModel.viewmodelsNews.getNewsWithid(rtl)
    })
}
exports.getUserDanhGia = (req) => {
    return DGCD.find({idNews:req.query.idDanhGia}).then(rtl => {
        return ViewModel.viewmodelsDanhGiaChiDinh.getDanhGiaChiDinh(rtl)
    })

}
exports.getNewsOfUserDanhGia = (req) => {
    return News.find({ 'idUserDanhGia.id': req.query.id, trangthaiDaDanhGia: false }).then(rtl => {
        return ViewModel.viewmodelsNews.getNewsWithid(rtl)
    })
}
exports.getNewsDaDanhGia = (req) => {
    return News.find({ trangthaiDaDanhGia: true }).then(rtl => {
        return ViewModel.viewmodelsNews.getNewsWithid(rtl)
    })
}