const asynhandler = (fn) => async (req,res,next) =>{
try {
    await fn(req,res,next)

} catch (error) {
    console.error(error.message);
     res.status(500).send('error '+error)   
}

}


module.exports = asynhandler
