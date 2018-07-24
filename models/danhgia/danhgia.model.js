const mongoose = require('mongoose');
const DanhGiaSchema = mongoose.Schema({
    idNews:String,
    idUser:String,
    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('DanhGia', DanhGiaSchema)
