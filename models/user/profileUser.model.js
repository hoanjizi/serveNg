const mongoose = require('mongoose')
const ProfileUserSchema = mongoose.Schema({
    idUser: {
        type: String,
        require: true,
        unique: true
    },
    lastName: {
        type: String,
        default:""
    },
    fisrtName: {
        type: String,
        default:""
    },
    img: {
        type: String,
        default:""
    },
    address: {
        type: String,
        default:""
    },
    phone: {
        type: String,
        default:""
    }

}, {
        timestamps: true
    }
)
module.exports = mongoose.model('ProfileUser',ProfileUserSchema)