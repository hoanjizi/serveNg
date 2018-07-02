const TopSong = require('../../models/listtopsong/requestsong.model')
exports.getTopsong = (req,res)=>
{
   TopSong.getHtmlFromUrl('https://www.nhaccuatui.com/')
}