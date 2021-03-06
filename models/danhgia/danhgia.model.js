const mongoose = require('mongoose');
const DanhGiaSchema = mongoose.Schema({
    tieuDe: {
        type: String,
        default: ""
    },
    danhGiaContent: {
        type: String,
        default: ""
    },
    tenFile: {
        type: String,
        default: ""
    },
    mucDo: {
        type: String,
        default: ""
    },
    idNews: {
        type: String,
        default: ""
    },
    idUser: {
        type: String,
        default: ""
    },
    idUserNews: {
        type: String,
        default: ""
    },
    nickname:{
        type: String,
        default: ""
    },
    username:{
        type: String,
        default: ""
    },
    trangthai: {
        type: Boolean,
        default: false
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('DanhGia', DanhGiaSchema)
