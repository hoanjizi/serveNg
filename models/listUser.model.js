const mongoose = require('mongoose');
const ListUserSchema = mongoose.Schema({
    username: String,
    age: Number,
    email: String,
    address: String,
    img:String
}, {
        timestamps: true
    });
module.exports = mongoose.model('listuser', ListUserSchema)


