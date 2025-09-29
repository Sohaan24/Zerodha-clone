const {model} = require("mongoose") ;

const{PositionSchema} = require("../Schemas/PositionSchema") ;

const PositionModel = new model("position", PositionSchema) ;
module.exports = {PositionModel} ;