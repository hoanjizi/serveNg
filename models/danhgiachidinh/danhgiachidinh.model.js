const mongoose = require('mongoose');
const DanhGiaChiDinh = mongoose.Schema({
    idNews: {
        type: String
    },
    idUser: {
        type: String
    },
    trangThai: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('DanhGiaChiDinh',DanhGiaChiDinh)