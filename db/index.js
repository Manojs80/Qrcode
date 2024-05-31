const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://manojsiva:manojsiva@cluster0.wlzcmln.mongodb.net/E36 `)

.then(()=>{console.log(" db connected sucessfuly")})
.catch(()=>{console.log(" db connection failure ")})
//    mongodb://localhost:27017/E36