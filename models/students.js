const mongoose = require('mongoose')
const studentScheme = new mongoose.Schema({
     name:{
          type:String,
          required:true,
          minlength: [3,'Please enter the morethan 5 characters']
     },
     age :Number,
     email:{
          type:String,
          requird:true,
          unique:true
     },
     place:String,
     address:String,
     gender:{
          type:String,
          enum:{
               values:['male','female','others'],
               message:'{VALUE} is not suppported'
          }
          },

     imageUrl:String,

},{
     timestamps:true,
})

const StudentModel = mongoose.model('Student', studentScheme)
module.exports = StudentModel
