require('dotenv').config()

const sendmail = async(req,res)=>{

    let  studentdetails = req.body;
    console.log(studentdetails)
  

     var nodemailer = require('nodemailer');

     var transporter = nodemailer.createTransport({ 
       service: 'gmail',
       auth: {
         user: '08041996kallada@gmail.com',
         pass: process.env.PASSWORD    
       }
     });
    
     var mailOptions = {
       from: '08041996kallada@gmail.com',
       to: 'manojsck0804@gmail.com , ashin209@gmail',
       subject: 'Assignment Nodejs',
       text: 'This is send through nodemailer by MANOJ S and emailID 08041996kallada@gmail.com'
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
   module.exports = sendmail