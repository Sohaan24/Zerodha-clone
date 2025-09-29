const mongoose = require("mongoose") ;
const bcrypt = require("bcrypt") ;

const userSchema = new mongoose.Schema({
    mobileNumber : {
        type : String,
        required :[true, "Your mobile number is required"] ,
        unique : true,
        match : [/^[6-9]\d{9}$/, "Please enter a valid mobile number"],
    },
    username : {
        type : String,
        required :[true, "Your username is required"],
        unique : true,
        minLength : [4, "Username must be at least 4 characters long"],
        maxLength : [15, "Username can't be more than 20 characters long"],
    },

    password : {
        type : String,
        required :[true, "Your password is required"],
    },
    createdAt : {
        type : Date,
        default : new Date(),
    },
});

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {userSchema} ;