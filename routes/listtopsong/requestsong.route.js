const TopSong = require('../../controllers/listtopsong/requestsong.controller')
const Wraper = require('../../infras/wraper.infras')
module.exports = (app)=>{
    app.get('/topsong',TopSong.getTopsong)
}