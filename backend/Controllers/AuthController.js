const User = require("../Models/UserModel") ;
const { createSecretToken} = require("../util/SecretToken") ;
const bcrypt = require("bcrypt") ;

module.exports.Signup = async (req, res, next)=>{
    try{
        const {mobileNumber, username, password, createdAt} = req.body ;
        const existingUser = await User.findOne({mobileNumber}) ;
        if(existingUser){
            return res.status(400).json({message : "User already exists"}) ;
        }

        const user = await User.create({mobileNumber, username, password, createdAt}) ;
        const token = createSecretToken(user._id) ;
        res.cookie("token", token,{
            withCredentials :true,
            httpOnly : false,
        });
        res.status(201).json({message : "User signed in successfully", success : true, user}) ;
        next() ;
    }catch(error){
        console.error(error) ;
    }
};

module.exports.logout = (req, res) => {
  res.clearCookie("token");
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
        res.cookie("token", token, {
            withCredentials : true,
            httpOnly : false,
        });
        res.status(200).json({message : "User Logged in successfully", success : true}) ;
        next();
    }catch(error){
        console.error(error);
    }
}