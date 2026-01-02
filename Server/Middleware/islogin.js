import jwt from "jsonwebtoken";
import {userModel} from "../Schema/userSchema.js"

export const islogin=async (req,res,next)=>{
try {
    const token = req.cookies.token;

    // console.log(req.cookies)
    if(!token){
        return res.json({message:"token not found"});
    }
    const decodedUser=jwt.verify(token, 'secrectcode');
    if(!decodedUser){
        return res.json({message:"token not valid"});
    }
    console.log(decodedUser)
    const user= await userModel.findOne({_id:decodedUser.userId});
   
    req.user=user;
    console.log(user)
    next()
} catch (error) {
    if(error){
        console.log(error);
        res.send(error)
    }
}
}