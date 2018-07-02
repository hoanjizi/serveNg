const mongoose = require('mongoose')
const VerifyUsers = mongoose.Schema({
    idUser: {
        type: String,
        require: true
    },
    stringUUID: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        default: false,
        require: true
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('verifyuser', VerifyUsers)