const Token = require('../models/token.model.js');
const moment = require('moment');
const Error = require('../infras/error.infras.js')
module.exports.randomtoken = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 35; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
module.exports.auth = (req, connection) => {
    return Promise.resolve().then(() => {
        let user = { isAuthorized: false, message: 'invalid user authentication' }
        if (!req.headers.authorization) {
            return user
        }
        else {
            return Token.find({ token: req.headers.authorization, verified: true })
                .then((token) => {
                    if (token[0].timeToken < moment().unix()) {
                        return Token.findOneAndUpdate({ token: req.headers.authorization }, { "verified": false }, { new: true })
                            .then((updateToken) => {
                                // return res.status(Error.Status.Unauthorized).send({
                                //     message: 'token expried'
                                // });
                                user = { isAuthorized: false, message: 'token expried' }
                                return user
    
                            })
                            .catch((ex) => {
                                console.log("Exception when processing user authentication", ex)
                                throw ex
                            })
                    } else {
                        user = { isAuthorized: true, message: 'abc', name: "usertest" };
                    }
                    return user
                })
            }
    })
    
}

//TODO:
/*
1. change filename, need user information to know who is calling API, remove unused functions.
  1.1 refactor to make user a service function has only one reponsibility.
  1.2 apply unit test to service function
2. use momentJS to handle datetime data, all datetime should be stored as UTC
3. log message should be handle in one place
4. investigate transaction
5. report:
  a. decide where to use random uuid to log important information. this id will be attached to email to send to the developer if needed
  b. OPTIONAL: store needed information to detect system problem
6. investigate CI: bitrise. 
    => where to upload your source to
    => bitrise will get that source to run based on our defintion => it then will deploy to our remote machine

*/