const uuid = require('uuid');
const ExpressError = require('../models/error.model')
const successCode = 200
const Token = require('../models/token.model.js')
const bcrypt = require('bcrypt')
const dbConfig = require('../config/database.config.js')
const auth = require('../utils/token.utils.js').auth
const ErrorCode = require('../infras/error.infras.js')
const wrapMongo = require('../infras/connectdata.infras.js').wrapMongoConnection
const moment = require('moment')
const mongoose = require('mongoose')

const wrapper = (opName, req, res, func) => {
    const id = `${opName}[${uuid.v4()}]`
    Promise.resolve()
        .then(() => {
            // if (requireAuthorization && req.user.isAuthorized == false) {
            //     throw new ExpressError.UnAthorized(req.user.message)
            // }
            console.log(`Service start::${id}`)
            return Promise.resolve(func(req))
        })
        .then((responseBody) => {
            res.status(successCode).send(new ExpressResponse("Success", responseBody));
            console.log('request end ' + new Date())
        })
        .catch((error) => {
            doCatch(error, res, id)
        })

}

class ExpressResponse {
    constructor(message, body) {
        this.message = message
        this.body = body
    }
}

// const wrapForExpress = (opName, func, requireAuthorization) => {
//     return (req, res) => { return wrapper(opName, req, res, func, requireAuthorization) }
// }

const wrapForExpressWithMongo = (opName, func, requireAuthorization) => {
    return (req, res) => {
        return wrapper(opName, req, res, (req) => {
                if (requireAuthorization) {
                    return auth(req).then((user) => {
                        console.log(user)
                        req.user = user
                        if (req.user.isAuthorized) {
                            return func(req)
                        }
                        else {
                            throw new ExpressError.UnAthorized(req.user.message)
                        }
                    })
                }
                else {
                    return func(req)
                }
            })
    }
}

const doCatch = (error, res, id) => {
    let errorObj = new ExpressResponse(`Service Error::${id + '::' + error.message}`, { msg: error.message, code: id })
    if (error instanceof ExpressError.HttpFriendlyError) {
        res.status(error.code).send(errorObj)
    }
    else {
        console.log(errorObj)
        errorObj.message += "::UnexpectedError"
        res.status(ErrorCode.Status.InternalServerError).send(errorObj)
    }
}

module.exports = wrapForExpressWithMongo