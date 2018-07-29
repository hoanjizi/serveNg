const mongoose = require('mongoose');
const DanhGiaSchema = mongoose.Schema({
    tieuDe: String,
    danhGiaContent: String,
    tenFile: String,
    mucDo: String
}, {
        timestamps: true
    })
module.exports = mongoose.model('DanhGia', DanhGiaSchema)
