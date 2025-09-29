const {model} = require("mongoose") ;

const {HoldingSchema} = require("../Schemas/HoldingSchemas") ;

const HoldingModel = new model("holding", HoldingSchema);

module.exports = {HoldingModel} ;
