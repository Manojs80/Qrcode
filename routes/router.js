const { studentimage, getstudent, studentdelete, getstudentid, putstudentid } = require('../controllers/studentcontrollers');
const asynhandler = require('../utils/asyhandler');
const StudentModel = require('../models/students')
const router = require('express').Router();

const multer = require('multer');
const sendmail = require('../controllers/mailcontroller');
const qrcodegenerate = require('../controllers/qrcode');

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
 router.post('/students', upload.single('image') ,asynhandler(studentimage)  )
router.delete('/students/:id',asynhandler(studentdelete) )
router.get('/students',asynhandler(getstudent) )
router.get('/students/:id',asynhandler(getstudentid)  )
router.put('/students/:id',asynhandler(putstudentid)  )
 router.post('/students/upimage', upload.single('image'), asynhandler(studentimage) )
 router.post('/sendmail',sendmail)
 router.post('/createqrcode',qrcodegenerate)


module.exports = router;