const News = require('../../models/news/news.model')
const ExpressError = require('../../models/error.model')
const ViewModel = require('../../viewmodels/viewmodels.js')

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
    return News.find({trangthai:false}).then(rtl=>{
        return ViewModel.viewmodelsNews.getNewsWithid(rtl)
    })
}