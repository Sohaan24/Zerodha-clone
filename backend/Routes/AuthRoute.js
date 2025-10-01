const {Signup, Login} = require("../Controllers/AuthController") ;
const router = require("express").Router() ;
const {userVerification} = require("../Middleware/AuthMiddleware") ;

const {allholdings : allHoldings, allPosition : allPosition, newOrder : newOrder, sellStock : sellStock} = require("../Controllers/Controller") ;

router.post("/signup", Signup);
router.post("/login", Login);

router.get("/verify-user", (req, res) => {
  return userVerification(req, res);
});

router.get("/allholdings", userVerification,allHoldings);

router.get("/allposition",userVerification ,allPosition);

router.post("/newOrder",userVerification ,newOrder);

router.post("/sellStock",userVerification ,sellStock);

module.exports = router ;