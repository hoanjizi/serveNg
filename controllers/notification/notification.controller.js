const Notification = require('../../models/notification/notification.model')
const ExpressError = require('../../models/error.model')
const ViewModel = require('../../viewmodels/viewmodels.js')

exports.createNotifi = (req, res) => {
    const notification = new Notification({
        title: req.body.title,
        content: req.body.content,
        contentmini: req.body.contentmini
    })
    return notification.save().then(result => {
        return result.msg = 'success'
    })
}

exports.findThreeNotifi = (req, res) => {
    return Notification.find().sort({updatedAt: -1, score: -1}).limit(3).then(notifi => {
        if (notifi == null) {
            throw new ExpressError.NotFound('not found')
        }
        return ViewModel.viewmodelsNotifi.getThreeNotifi(notifi)
    })
}
exports.findNotifiId = (req, res) => {
    return Notification.findById(req.query.id).then(notifi => {
        if (notifi == null) {
            throw new ExpressError.NotFound('not found')
        }
        return ViewModel.viewmodelsNotifi.getNotifiId(notifi)
    })
}