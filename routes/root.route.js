const express = require('express')
const app = express.Router()

require('./user.route.js')(app)
require('./food.route.js')(app)
require('./listUser.route.js')(app)
require('./active.route')(app)
require('./user/profileuser.route')(app)
require('./listtopsong/requestsong.route')(app)

module.exports = app