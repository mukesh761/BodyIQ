import React from 'react'
import loginImage from '../../assets/image.png'
import bowl from '../../assets/bowl.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../../Context/userContext'

const SignUp = () => {
  const [name, setname] = useState(null)
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  const [cPassword, setcPassword] = useState(null)
  const [dob, setdob] = useState(null)
  const {setuser,setislogin}=useContext(userContext)
  const [loading, setloading] = useState(false)

  const navigate=useNavigate();

  //request to server to signup user
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setloading(true)
    console.log('signup clicked')
    if(password!==cPassword){
      alert("Password do not match")
      return
    }
    const data={name,email,password,dob}
    try{
      const res=await axios.post('https://bodyiq-server.onrender.com/user/signup',data,{withCredentials:true})
      console.log(res.data)
      alert("Signup Successful! Please Login" )
      localStorage.setItem('user',JSON.stringify(res.data.user))
      localStorage.setItem('islogin',true)
      setuser(res.data.user)
      setislogin(true)
      setloading(false)
      console.log("User signed up successfully")
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="flex items-center justify-center flex-col p-5 md:flex-row h-screen w-screen md:gap-10 ">
    <div className='left flex flex-col items-center justify-center md:w-[50%] '>
        <div className='pt-10 sm:pt-70'>
            <img src={bowl} alt="Bowl" className='w-40'/>
        </div>
        <div className='flex items-center justify-center flex-col pt-10 gap-2'>
            <h1 className='text-green-600 font-bold text-2xl' >Eat Right. Shape Your Future.</h1>
            <h3 className='text-red-400 font-semibold' >Personalized Nutrition for Your Dream Body</h3>
        </div>
        <img src={loginImage} alt="Login" />
    </div>
    <div className='right flex flex-col items-center justify-center rounded-lg w-[90%] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] gap-5 md:w-[40%] md:h-96'>
        <h1 className='text-xl font-semibold pb-5'>Login</h1>
        <form action="" className='flex flex-col items-center justify-center gap-2'>
            <input type="text" 
            className='h-12 w-84 border p-2 rounded-lg'
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
             />
              <input type="text" 
            className='h-12 w-84 border p-2 rounded-lg'
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
             />
             
               <input type="text" 
            className='h-12 w-84 border p-2 rounded-lg'
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
             />
              <input type="password" 
            className='h-12 w-84 border p-2 rounded-lg'
            placeholder="Confirm your password"
            value={cPassword}
            onChange={(e)=>setcPassword(e.target.value)}
             />
            <input type="date" name="birthdate" id="birthdate" className='h-12 w-84 border p-2 rounded-lg'
            value={dob}
            onChange={(e)=>setdob(e.target.value)}
            />
            <button className='h-12 w-84 bg-green-600 text-white rounded-lg'
            onClick={handleSubmit}
            >Sign up</button>
            
        </form>
        <div className=' mb-5'>
            <p><a href="/signup" className='text-blue-500 mb-5'>Already have an account? Log In</a></p>
        </div>
    </div>
    </div>
  )
}

export default SignUp