const urlEncode =  require('body-parser').urlencoded({ extended: true })
const newsCtl = require('../../controllers/news/news.controller')

module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/news/createnews',urlEncode, Wraper("Createnews",newsCtl.createNews,true))
    app.get('/news/getnewid', Wraper("newsid",newsCtl.findNewsWithId,true))
    app.get('/news/getnewidmongo', Wraper("newsidmongo",newsCtl.findNewsWithIdMongo,true))
    app.get('/news/getnewschuaduyet', Wraper("newschuaduyet",newsCtl.getNewsChuaDuyet,true))
    app.get('/news/getnewsdaduyet', Wraper("newsdaduyet",newsCtl.getNewsTrangThaiTrue,true))
    app.get('/news/getuserdanhgia', Wraper("userdanhgia",newsCtl.getUserDanhGia,true))
    app.get('/news/getNewsOfUserDanhGia', Wraper("getNewsOfUserDanhGia",newsCtl.getNewsOfUserDanhGia,true))
    app.get('/news/getNewsDaDanhGia', Wraper("getNewsDaDanhGia",newsCtl.getNewsDaDanhGia,true))

    app.post('/news/updateiduserrole', Wraper("updateiduserrole",newsCtl.createIdUserDanhGia,true))
    app.post('/news/getcountroleuser', Wraper("getCountRoleUser",newsCtl.getCountRoleUser,true))
    app.post('/news/updateStatusRoleUser', Wraper("updateStatusRoleUser",newsCtl.updateStatusRoleUser,true))


    app.get('/news/download/:ten', newsCtl.downloadFile)
}