const express = require('express')
const app  = new express();
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const routes = require('./routes/router')

app.use('/',routes)



require('./db')

app.listen(2345,()=>{
    console.log('listening on' + 2345)
})
app.get('/',async(req,res)=>{
    res.send("welcome by manojss253")
})
app.get('/data',async(req,res)=>{
    let data = {
        name: "manoj s",
        place: "Kallada"
    }
    res.status(200).send({data})
})
app.get('*',async(req,res)=>{
   res.status(404).send("no api found")
})
app.listen(2348,()=>{
    console.log('listening on' + 2346)
})
