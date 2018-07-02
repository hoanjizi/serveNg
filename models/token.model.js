const mongoose = require('mongoose')
const TokenSchema = mongoose.Schema({
    idUser: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: true
    },
    timeToken: {
        type: Number,
        required: true
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('Token', TokenSchema)