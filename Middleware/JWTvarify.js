const  jwt = require('jsonwebtoken')
 require('dotenv').config()
let verifyToken=async(req,res,next)=>{
try {

    let token  = req.headers.token
    if(!token){return res.status(400).send({success:false,message:"Token not Found"})}
    var decoded = jwt.verify(token, process.env.JWTKEY);
    if(!decoded){return res.status(400).send({success:false,message:"Login please"})}
    req.userID  = decoded.user._id;
    next();
} catch (error) {
     res.status(500).send({success:false,message:"crashed Token"})
}}
module.exports={verifyToken};