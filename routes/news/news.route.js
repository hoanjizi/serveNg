const urlEncode =  require('body-parser').urlencoded({ extended: true })
const newsCtl = require('../../controllers/news/news.controller')

module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/news/createnews',urlEncode, Wraper("Createnews",newsCtl.createNews,true))
    app.get('/news/getnewid', Wraper("newsid",newsCtl.findNewsWithId,true))
    app.get('/news/getnewidmongo', Wraper("newsidmongo",newsCtl.findNewsWithIdMongo,true))
    app.get('/news/download/:ten', newsCtl.downloadFile)
}