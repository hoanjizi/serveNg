const mongoose = require('mongoose')
const dbConfig = require('../config/database.config')

module.exports.wrapMongoConnection = (func) => {
    return Promise.resolve().then(() =>{
        console.log('start connect database' + new Date())
        return mongoose.connect(dbConfig.url)
    })
    //return connection if you wanna use this, or else just ignore it
    .then((connection) => {
        console.log('successfully connect database' + new Date())
        return func(connection)  //this function should return a promise
    })
    .then((result) => {
        console.log(result)
        console.log('database connection is going to end after process' + new Date())
        //close connection
        return mongoose.disconnect().then(()=> {
            console.log("DB connection closed")
            return result
        })
    }).catch(err => {
        console.log('error connect database', err)
        //close connection
        return mongoose.disconnect().then(()=> {
            console.log("DB connection closed")
            throw err
        })
    });
}