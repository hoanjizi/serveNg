const listUser = require('../models/listUser.model.js');
const Error = require('../models/error.model.js');
const ViewModel = require('../viewmodels/viewmodels.js');
exports.createListUser = (req, res) => {
    if (!req.body.username) {
        return Promise.resolve().then(() => {
            throw new Error.BadRequest('username can not be empty')
        })
    }
    if (typeof req.body.age != 'number') {
        return Promise.resolve().then(() => {
            throw new Error.BadRequest('age not number')
        })
    }

    const listuser = new listUser({
        username: req.body.username,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address,

    });
    return listuser.save()
        .then(data => {
            if (!data) throw new Error.BadRequest('bad request')
            return data
        })
};
exports.findAllListUser = (req, res) => {
    return listUser.find()
        .then(users => {
            if (!users) throw new Error.BadRequest("can not read")
            return ViewModel.viewmodels.listuser(users)
        })
};
exports.findOneListUser = (req, res) => {
    return listUser.findById(req.params.userid)
        .then(listuser => {
            if (!listuser) {
                throw new Error.BadRequest('can not find id')
            }
            return listuser
        })
};