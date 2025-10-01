const HoldingModel = require("../Models/HoldingModel").HoldingModel ;
const PositionModel = require("../Models/PositionModel").PositionModel ;
const OrderModel = require("../Models/OrderModel").OrderModel ;

module.exports.allholdings = async(req,res)=>{
    let allHoldings = await HoldingModel.find({}) ;
    res.json(allHoldings) ;
}

module.exports.allPosition = async(req,res)=>{
    let allPos = await PositionModel.find({}) ;
    res.json(allPos) ;
}

module.exports.newOrder = async(req,res)=>{

  const { name, qty, price, mode} = req.body ;
  const ltp = price ; 
  const dayChange = "+0.00%";
  let newHolding = new HoldingModel({
    name,
    qty,
    avg : price,
    price : ltp,
    net : "0.00%",
    day : dayChange,
    isLoss : false,
    mode : mode
  });
  await newHolding.save() ;
  
  let newOrder = new OrderModel({
    name : req.body.name,
    qty : req.body.qty,
    price : req.body.price,
    mode : req.body.mode,
  })
  newOrder.save() ;
  res.send("Order saved!") ;

  const allHoldings = await HoldingModel.find({}) ;
  res.json({allHoldings});
};

module.exports.sellStock = async(req,res)=>{
  const {name,qty, price, mode} = req.body ;

  let holding = await HoldingModel.findOne({name: name}) ;
  if(!holding){
    return res.status.json("no such holding found") ;
  }

  if(holding.qty < qty ){
    return res.status.json("Not enough quantity to sell") ;
  }

  holding.qty -= qty ;

  if(holding.qty === 0){
    await HoldingModel.deleteOne({name : name}) ;
  }else{
    await holding.save() ;
  }

  let newOrder = new OrderModel({
    name,
    qty,
    price,
    mode : mode || "Sell"
  });

  await newOrder.save() ;
  res.send("Stock sold!") ;

  const allHoldings = await HoldingModel.find({}) ;
  res.json({allHoldings}) ;
}