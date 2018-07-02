const urlEncode =  require('body-parser').urlencoded({ extended: true })
module.exports = (app) => {
    const Wraper = require('../infras/wraper.infras.js');
    const foods = require('../controllers/food.controller.js');
    app.get('/foods',Wraper("food",foods.findAll,true));
}