const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CodeForTomm').then(()=>console.log('Db connected')).catch(()=>console.log("Db not connected"))
