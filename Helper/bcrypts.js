const bcrypt = require('bcrypt')

let hashPass =  async(simplepassword)=>{
    let saltRounds = 10;
    let hasspasword = await bcrypt.hash(simplepassword , saltRounds)
    return hasspasword;
}


let comparePassword = async(simplepassword,hasspasword)=>{
let compared = await bcrypt.compare(simplepassword, hasspasword);
return compared;
}


module.exports={hashPass,comparePassword}