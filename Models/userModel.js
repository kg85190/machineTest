const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    FirstName: { type: String, require: true },
    LastName: { type: String, require: true },
    Email: { type: String, require: true },
    password: { type: String, require: true },
},{timestamps:true})

let userModel = new mongoose.model('userModel',userSchema)
module.exports={userModel}