const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MongoID )

.then(()=>{console.log(" db connected sucessfuly"+process.env.MongoID)})
.catch(()=>{console.log(" db connection failure ")})
//    mongodb://localhost:27017/E36