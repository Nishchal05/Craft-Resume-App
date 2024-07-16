const mongoose=require('mongoose')
const SignUpdata=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongoose.model('SignUpdata' , SignUpdata);