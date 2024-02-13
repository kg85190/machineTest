const express = require('express');
const { userRoutes } = require('./Routes/userRoutes');
require('dotenv').config()
require('./DbConnection/Connection')
const app =express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/user',userRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig at ${process.env.PORT}`)
})