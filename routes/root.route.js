const express = require('express')
const app = express.Router()

require('./user/user.route.js')(app)
require('./user/active.route')(app)
require('./user/profileuser.route')(app)

module.exports = app