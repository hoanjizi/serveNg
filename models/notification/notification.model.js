const mongoose = require('mongoose');
const NotificationSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Unknow"
    },
    content: {
        type: String,
        default: ""
    },
    contentmini:{
        type: String,
        default: ""
    }
}, {
        timestamps: true
    })
module.exports = mongoose.model('Notification',NotificationSchema)