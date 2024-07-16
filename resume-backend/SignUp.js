const mongoose=require('mongoose')
const SignUpdata=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    createdAt: { type: Date, default: Date.now }
})
module.exports=mongoose.model('SignUpdata' , SignUpdata);
