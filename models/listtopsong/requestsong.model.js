const Request = require('request-promise')
const cheerio = require('cheerio')
module.exports.getHtmlFromUrl = (url) => {
    Request(url).then(data => {
        const $ = cheerio.load(data)
        let ds = $('div .info_data').text()
        console.log(ds)
        
    })
}