const User = require("../Models/UserModel") ;
const { createSecretToken} = require("../util/SecretToken") ;
const bcrypt = require("bcrypt") ;
const jwt = require("jsonwebtoken") ;


const cookieOptions = {
  httpOnly: true, 
  secure: true,   
  sameSite: 'none', 
  domain: 'onrender.com' 
};
module.exports.Signup = async (req, res, next)=>{
    try{
        const {mobileNumber, username, password, createdAt} = req.body ;
        const existingUser = await User.findOne({mobileNumber}) ;
        if(existingUser){
            return res.status(400).json({message : "User already exists"}) ;
        }

        const user = await User.create({mobileNumber, username, password, createdAt}) ;
        const token = createSecretToken(user._id) ;
        res.cookie("token", token,cookieOptions);
        res.status(201).json({
            message : "User signed in successfully",
             success : true,
              username : user.username
            }) ;
        next() ;
    }catch(error){
        console.error(error) ;
    }
};

module.exports.logout = (req, res) => {
  res.clearCookie("token", { domain: 'onrender.com', path: '/' });
  return res.status(200).json({ status: true, message: "Logged out successfully" });
}

module.exports.Login = async(req,res,next)=>{
    try{
        const{mobileNumber, password} = req.body;

        if(!mobileNumber || !password){
            return res.json({message : "All fields are required"});
        }
        const user = await User.findOne({mobileNumber});
        if(!user){
            return res.json({message : "User not found"})
        }

        const auth = await bcrypt.compare(password, user.password);
        if(!auth){
            return res.json({message : "Incorrect Password"})
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token,cookieOptions);
        res.status(200).json({message : "User Logged in successfully",
             success : true,
             username : user.username
            }) ;
        next();
    }catch(error){
        console.error(error);
    }
}

module.exports.verifyUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.json({ status: false });
    }

    return res.json({ status: true, user: user.username });
  } catch (error) {
    console.error(error);
    return res.json({ status: false });
  }
};