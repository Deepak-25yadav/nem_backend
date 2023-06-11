

const jwt = require("jsonwebtoken");
require('dotenv').config()

const auth = async(req,res,next) =>{
  const token = req.headers.authorization?.split(" ")[1];
  if(token){
    const decoded = jwt.verify(token,process.env.secretKey);
    if(decoded){
        req.body.userID = decoded.userID;
        req.body.userName=decoded.userName;
        next();
    }else{
        res.status(200).send({"msg":"Login First"});
    }
  }else{
   res.status(200).send({"msg":"Login First"});
  }
}


module.exports = {
    auth
}