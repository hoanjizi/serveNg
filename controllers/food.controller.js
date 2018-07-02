const Food = require('../models/food.model.js');
const Error = require('../models/error.model.js');
exports.findAll = (req, res) => {
    return Food.find()
    .then(foods => {
        if(!foods) throw new Error.BadRequest("can not read request")
        return foods
        // res.status(200).send(foods);
    })
    // .catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while retrieving notes."
    //     });
    // });
};