import jwt from 'jsonwebtoken'
export const genToken=(user)=>{
    const token=jwt.sign({userId:user._id,email:user.email},'secrectcode')
    return token;
}