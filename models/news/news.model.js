const mongoose = require('mongoose');
const NewsSchema = mongoose.Schema({
    id: {
        type: String,
        default: ""
    },
    tieude: {
        type: String,
        default: ""
    },
    tacgia: {
        type: String,
        default: ""

    },
    tukhoa: {
        type: String,
        default: ""
    },
    tomtat: {
        type: String,
        default: ""
    },
    tenfile: {
        type: String,
        default: ""
    },
    sobao: {
        type: String,
        default: ""
    },
    trangthai: {
        type: Boolean,
        default: false
    },
    trangthaiDaDanhGia: {
        type: Boolean,
        default:false
    },
    idUserDanhGia: {
        type: []
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('News', NewsSchema)