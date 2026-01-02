import React, { useEffect, useState } from 'react'

import Slider from '@mui/material/Slider';

import nutrient from '../../assets/nutrients.png'
import fatImage from '../../assets/fat.png'
import calorieImage from '../../assets/calories.png'
import proteinImage from '../../assets/protein.png'
import { Navigate, useNavigate } from 'react-router-dom';
import { pageContext } from '../../Context/pageContext';
import { useContext } from 'react';
import axios from 'axios';
import { userContext } from '../../Context/userContext';
import { mloutputContext } from '../../Context/mloutput';
import { useActionState } from 'react';

const Step6 = () => {
    const [calories, setcalories] = useState(2000)
    const [protein, setprotein] = useState(100)
    const [fat, setfat] = useState(70)
const { pages, setpages, pageData, setpageData } = useContext(pageContext)
const {user,setuser}=useContext(userContext)
const {output,setoutput}=useContext(mloutputContext)

    const navigate=useNavigate()
    const [result, setresult] = useState(false)
    const predictNutrition=async(data)=>{
      try {
        const response=await axios.post('http://localhost:3000/model/predict',data,{withCredentials:true})
        console.log(response.data)
        setresult(response.data?.recommendation?.result)


      } catch (error) {
        console.error('Error predicting nutrition:', error);
      }
          
    }
    useEffect(() => {
     if(result){
      setoutput(result)
      navigate('/')
     }
    },[result,setoutput,setresult])
    const handleNext=async()=>{
    const finalpayload={...pageData,calorieIntake:calories,proteinIntake:protein,fatIntake:fat}
    setpages({...pages,page6:true})
    setpageData(finalpayload)
   
  const response=await axios.post('http://localhost:3000/user/addinfo',finalpayload,{withCredentials:true})
   console.log(response.data)
   let user={name:response.data.user.name,goal:response.data.user.goal,
    email:response.data.user.email,
    _id:response.data.user._id
   }
   predictNutrition(finalpayload)
    localStorage.setItem('user',JSON.stringify(user))
    setuser(user)
    
  }
  

  const handleBack=()=>{
    navigate('/step5')
  }
  return (
    <div className='rounded-md m-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)]' >
      <button className='cursor-pointer m-4 rounded-md hover:border transition-all duration-150 '>skip &gt;&gt;</button>
      <div className='upper flex flex-col justify-between items-center pl-2 pt-10 md:flex-row md:pl-15 md:pr-15 '>
        <div className='left flex flex-col gap-2'>
          <div className='step-info flex gap-2'><p className='bg-green-500 rounded-full w-30 text-center'>step 6 of 6</p> <p>- keep going! </p></div>
          <h2 className='text-xl font-semibold md:font-extrabold md:text-2xl'>Tell us about Nutrient Intake</h2>
          <p className='text-sm text-slate-600 md:text-lg md:font-semibold'>Tell us about your nutrient intake so we can tailor the perfect plan to suit your goal</p>
        </div>
        <div className='right'>
          <img src={nutrient} alt="" />
        </div>
      </div>
      <div className='middle  rounded-lg  m-5 p-5 pb-0'>
        <div className='p-10 md:flex md:justify-between md:items-center'>
            {/* {calorie} */}
          <div className='md:w-[25%] md:shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] md:p-2 md:rounded-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={calorieImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>calories</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{calories} <p>cal</p></h1>

          </div>
          <div> <Slider
            className='w-60'
            value={calories}
            min={1200}
            step={50}
            max={3500}
            size='medium'
            onChange={(e, newValue) => setcalories(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          /></div>
          </div>

          {/* protein */}
           <div className='md:w-[25%] md:shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] md:p-2 md:rounded-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={proteinImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>Protein</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{protein} <p>g</p></h1>
          </div>
          <div> <Slider
            className='w-60'
            value={protein}
            min={40}
            step={5}
            max={250}
            size='medium'
             onChange={(e, newValue) => setprotein(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            // defaultValue={100}
          /></div>
          </div>
          {/* fat */}
           <div className='md:w-[25%] md:shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] md:p-2 md:rounded-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={fatImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>fat</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{fat} <p>g</p></h1>

          </div>
          <div> <Slider
            className='w-60'
            value={fat}
            min={30}
            step={5}
            max={150}
            size='medium'
            onChange={(e, newValue) => setfat(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            //  defaultValue={50}
          /></div>
          </div>
        </div>
      </div>
      <div className='lower flex items-center justify-between p-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p rounded-md'>
        <button className='border h-8 w-18 rounded-lg cursor-pointer'
        onClick={handleBack}
        > &lt; Back</button>
        <p>skip this section if you don't know we'll figure it out</p>
        <button className='border h-8 w-18 rounded-lg bg-green-500 cursor-pointer'
          onClick={handleNext}
        
        >Next &gt;</button>
      </div>
    </div>
  )
}

export default Step6