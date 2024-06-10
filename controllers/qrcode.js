
const qrcodegenerate = async(req,res)=>{
   

// Require the package
const QRCode = require('qrcode')

// Creating the data
let data = {
	name:"MANOJ S",
	age:28,
	batch:"E36",
	course:"FULL STACK DEVELOPER"
}

// Converting the data into String format
let stringdata = JSON.stringify(data)

// Print the QR code to terminal
QRCode.toString(stringdata,{type:'terminal'},
                    function (err, QRcode) {
 
    if(err) return console.log("error occurred")
 
    // Printing the generated code
    console.log(QRcode)
	//res.status(200).send(`SUCCESSFULLY create Qrcode ${QRcode}` )
})

// Converting the data into base64 
QRCode.toDataURL(stringdata, function (err, code) {
	
	if(err) return console.log("error occurred")
		res.status(200).send(`SUCCESSFULLY create Qrcode ${code}`)
	
	// Printing the code
	console.log(code)
})
}



module.exports = qrcodegenerate