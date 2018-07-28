const User = require('../../models/user/users.model.js')
const Token = require('../../models/token.model.js')
const TokenRandom = require('../../utils/token.utils.js')
const Utils = require('../../utils/utils')
const bcrypt = require('bcrypt')
const moment = require('moment')
const ExpressError = require('../../models/error.model')
const VerifiedUser = require('../../models/verifyUser.model')
const ViewModel = require('../../viewmodels/viewmodels.js')
const UserLogic = require('../../models/user/user.logic.js')



//change function name to be more meaningful
//get parameter from request to validate, if fail return 400 bad request
//separate logic to a deeper layer that has responsibility to handler everything related to User
//create a response folder or class to return viewModel
//controller -> service/model(mongo) -> dataHandler(database)/model(mongo)
//folder response
//folder infras (wrapper, constant)
//folder utils (helpers)

exports.createUser = (req, res) => {
    const user = new User({
        nickname: req.body.nickname,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        passwordConf: req.body.passwordConf,
        country: req.body.country
    });
    let random = Utils.randomtoken(35)
    return user.save().then(data => {
        const verifyUser = new VerifiedUser({
            idUser: data._id,
            stringUUID: random
        })
        return verifyUser.save().then(result => {
            return result.msg = 'check mail';
        })
    })

};

exports.findAllUser = (req, res) => {
    return User.find()
        .then(users => {
            return users
        })
};

exports.findOneUser = (req) => {
    return User.findOne({ username: req.body.username })
        .then(user => {

            if (user == null) {
                throw new ExpressError.UnAthorized("Incorrect username or password")
            }
            if (!user.verified) {
                throw new ExpressError.UnAthorized("not verified email")
            }
            return bcrypt.compare(req.body.password, user.password).then(compareResult => {
                if (compareResult === true) {
                    let tokeninsert = TokenRandom.randomtoken()
                    let newtoken = new Token({
                        idUser: user._id,
                        token: tokeninsert,
                        nickname: user.nickname,
                        timeToken: moment().unix() + 86400
                    });
                    return newtoken.save().then((data) => {
                        return ViewModel.viewmodels.usertoken(data.idUser, data.token, user.role, user.nickname)
                    })
                }
                else {
                    throw new ExpressError.UnAthorized("Incorrect username or password")
                }
            })

        })
}
exports.getUserRoleThree = (req) => {
    return User.find({ role: "3" }).then(res => {
        return ViewModel.viewmodels.listuser(res)
    })
}
exports.getUserId = (req) => {
    return User.findById(req.query.id).then(rtl => {
        return ViewModel.viewmodels.user(rtl)
    })
}
exports.getUserRoleAll = (req) => {
    return User.find({ role: { $gte: 2 } }).then(rtl => {
        return ViewModel.viewmodels.listuser(rtl)
    })
}
exports.updateRoleUser = (req) => {
    return User.findByIdAndUpdate(req.query.id, { $set: { role: req.query.role } }).then(rtl => {
        return ViewModel.viewmodels.message('updated');
    })
}

