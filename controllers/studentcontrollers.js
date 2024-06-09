const StudentModel = require('../models/students')


const studentdelete = async(req,res)=>{

      const id = req.params.id
      const isexit = await StudentModel.findById(id)
      if(!isexit) throw('  Not exist')
      await StudentModel.findByIdAndDelete(id)
     
      res.status(200).send('deleting data ')
    
 }

 const studentimage = async(req,res)=>{

      let studentdetails = req.body;
      studentdetails.imageUrl = `https://localhost:2345/uploads/${req.file.filename}`
      console.log(studentdetails)
      const data = new StudentModel(studentdetails)
      await data.save();
      res.status(200).send('Receive data ' + data)
   
}
const getstudent = async(req,res)=>{
    
      let data = await StudentModel.find()
      res.status(200).send({data:data,status:true})
    
  }

  const getstudentid = async(req,res)=>{
    
      const id = req.params.id
      let data = await StudentModel.findById(id)
      res.status(200).send({data:data,status:true})
    
  } 

  const putstudentid = async(req,res)=>{
    
      let id = req.params.id
      let newdata = req.body
      await StudentModel.findByIdAndUpdate(id,newdata)
      res.status(200).send({status:true,message:"updated"})
    
  }

 module.exports = {studentdelete,studentimage,getstudent,getstudentid,putstudentid}