const mongoose=require('mongoose')
var jwt = require('jsonwebtoken');
const SignUpdata=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    createdAt: { type: Date, default: Date.now }
})
SignUpdata.methods.createJWT=function(){
    return jwt.sign(
        {
            userId:this._id
        },process.env.JWTCODE,{expiresIn: '1d'}
    )
}
module.exports=mongoose.model('SignUpdata' , SignUpdata);
