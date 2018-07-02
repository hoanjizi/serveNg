const mongoose = require('mongoose');
const FoodSchema = mongoose.Schema({
    name: String,
    price: String,
    note: String,
    total: String,
    img: String,
    status: Boolean
}, {
  timestamps: true
});
module.exports = mongoose.model('Food', FoodSchema);