const {model}  = require("mongoose") ;

const {OrderSchema} = require("../Schemas/OrderSchema") ;

const OrderModel = new model("order", OrderSchema);

module.exports = {OrderModel} ;