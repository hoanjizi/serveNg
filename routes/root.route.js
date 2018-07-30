const express = require('express')
const app = express.Router()

require('./user/user.route.js')(app)
require('./user/active.route')(app)
require('./user/profileuser.route')(app)
require('./notification/notification.route')(app)
require('./news/news.route')(app)
require('./danhgia/danhgia.route')(app)
require('./danhgiachidinh/danhgiachidinh.route')(app)

module.exports = app