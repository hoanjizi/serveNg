const mongoose = require('mongoose');
const NewsSchema = mongoose.Schema({
    episodes: {
        type: String,
        default: "",
        require: true
    },
    number: {
        type: String,
        default: "",
        require: true
    },
    title: {
        type: String,
        default: "",
        require: true
    },
    content: {
        type: String,
        default: ""
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('News', NewsSchema)