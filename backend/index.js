require("dotenv").config() ;

const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose") ;
const bodyParser = require("body-parser");
const cors = require("cors") ;
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT|| 3002 ;
const uri = process.env.MONGO_URL ;


const allowedOrigins = [
  "http://localhost:5173", // frontend app
  "http://localhost:5174", // dashboard app
  "https://full-stack-stock-trading-platform-poeo.onrender.com",
  "https://full-stack-trading-platform-frontend-90ha.onrender.com",
 
  
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(bodyParser.json()) ;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoute);



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`) ;
    mongoose.connect(uri) ;
});