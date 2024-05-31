const StudentModel = require('../models/students')
const router = require('express').Router();



const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null,'uploads/')
  }, 
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,  uniqueSuffix + file.originalname)
   
 }
 });

const upload = multer({ storage: storage });

 router.get('/', async(req,res)=>{
    res.send('Hello. this is a router module')
 }
)
 router.post('/students', upload.single('image') ,async(req,res)=>{

        try {
          let studentdetails = req.body;
          studentdetails.imageUrl = `https://localhost:2345/uploads/${req.file.filename}`
          console.log(studentdetails)
          const data = new StudentModel(studentdetails)
          await data.save();
          res.status(200).send('Receive data ' + data)
        } catch (error) {
         console.error(error.message);
         res.status(400).send('error in saving data'+error.message)
        }
}
)
router.delete('/students/:id', async(req,res)=>{

   try {
     const id = req.params.id
     const isexit = await StudentModel.findById(id)
     if(!isexit) throw('  Not exist')
     await StudentModel.findByIdAndDelete(id)
    
     res.status(200).send('deleting data ')
   } catch (error) {
    console.error(error.message);
    res.status(500).send('error in deleting data'+error)
   }
}
)
router.get('/students', async(req,res)=>{
  try {
    let data = await StudentModel.find()
    res.status(200).send({data:data,status:true})
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error'+error)
  }
}
)
router.get('/students/:id', async(req,res)=>{
  try {
    const id = req.params.id
    let data = await StudentModel.findById(id)
    res.status(200).send({data:data,status:true})
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error'+error)
  }
 
}
)
router.put('/students/:id',async(req,res)=>{
  try {
    let id = req.params.id
    let newdata = req.body
    await StudentModel.findByIdAndUpdate(id,newdata)
    res.status(200).send({status:true,message:"updated"})
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error'+error)
  }
})
 router.post('/students/upimage', upload.single('image'), async(req,res)=>{
  console.log("sv");
  try {
    console.log('reading image',req.body)
    res.status(200).send('Receive image')
  } catch (error) {
   console.error(error.message);
   res.status(400).send('error in saving data'+error)
  }
}
)
 router.post('/sendmail',async(req,res)=>{

       
          var nodemailer = require('nodemailer');

          var transporter = nodemailer.createTransport({ 
            
            service: 'gmail',
            auth: {
              user: '08041996kallada@gmail.com',
              pass: 'mzvj qhcl eamq bgib'
            }
          });
          
          var mailOptions = {
            from: '08041996kallada@gmail.com',
            to: 'manojsck0804@gmail.com',
            subject: 'Assignment Nodejs',
            text: 'This is send thrtough nodemailer by your name plus your email'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              res.status(400).send('Error in sending email'+error)
            } else {
              console.log('Email successfully sent: ' + info.response);
              res.status(200).send('SUCCESSFULLY SEND EMAIL')
            }
          });
        }
)

module.exports = router;