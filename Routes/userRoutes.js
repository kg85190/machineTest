const { registeration, login, restPassword,forgetPassword } = require('../Controllers/userController')
const express = require('express')
let userRoutes = express.Router()
let {verifyToken}  = require ('../Middleware/JWTvarify.js')




userRoutes.post('/registerUser',registeration)
userRoutes.post('/login',login)
userRoutes.post('/restPassword',verifyToken,restPassword)
userRoutes.post('/forgetPassword',forgetPassword)



module.exports={userRoutes}