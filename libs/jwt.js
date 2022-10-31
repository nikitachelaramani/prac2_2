const jwt=require("jsonwebtoken")
const secret="secret-key"
const exptime=3000;
const sign=(req,res)=>{
if(req.body.username == "username1" && req.body.password == "mypassword1"){
const token=jwt.sign({username:
"username1",role:"admin"},secret,{algorithm:"HS256",expiresIn:exptime})
res.send(token)
}
else{
res.send('Invalid username or password');
}
}