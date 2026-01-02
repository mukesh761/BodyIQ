import React, { useContext } from 'react'
import NutrientRing from '../NutrientRing.jsx'
import { mloutputContext } from '../../Context/mloutput.jsx'
import { userContext } from '../../Context/userContext.jsx'
import axios from 'axios'



const Home = () => {
  const suggestedFoods=async (remainingCalories, remainingProtein, remainingFat )=>{
    const data={
      calories:remainingCalories,
      protein:remainingProtein,
      fat:remainingFat}
    try {
      const response=await axios.post('https://bodyiq-server.onrender.com/food/suggestion',data,{withCredentials:true})
      const result=response.data
      console.log(result)
    } catch (error) {
      console.error('Error fetching food suggestions:',error)
    }
  }
  // const {output,setoutput}=useContext(mloutputContext)
  const {user,setuser}=useContext(userContext)
  console.log(user.dailyRequirement[0].pProtein)
  return (
    <div>
      <div className='p-10'>
        <div>
          <h1 className='font-bold text-xl text-blue-500'>
            BodyIQ
          </h1>
        </div>
        <div>
          <h1 className='font-semibold text-xl '>Welcome Back ,{user.name}  !</h1>
          <p className='text-gray-500'>Here is your latest health overview and nutrient recommendation </p>
        </div>
      </div>
      <div className='pl-10 pr-10'>
        <div className='w-full h-10 rounded-md text-start p-2 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] '>
          <h1>Current Body info</h1>
        </div>
        <div className='mt-5 flex justify-center gap-5 flex-wrap'>
          <div className='h-25 w-45 rounded-md shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p-5'>
            <h1>Weight</h1>
            <h1>{user.weight} kg </h1>
            <h1>overweight</h1>
          </div>
          <div className='h-25 w-45 rounded-md shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p-5'>
            <h1>goal</h1>
            <h1>{user.goal}</h1>

          </div>
          <div className='h-25 w-45 rounded-md shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p-5'>
            <h1>BMI</h1>
            <h1> {user.BMI} </h1>
            <h1>Good</h1>
          </div>
        </div>
      </div>

      <div className=' p-10'>
        <div className='w-full h-10 rounded-md text-start p-2 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] ' >
          <h1 >Suggested Nutrients</h1>
        </div>
        <div className='flex flex-wrap gap-2 justify-center items-center md:gap-10'>
          <div>
            <NutrientRing
              label="Protein"
              consumed={100}
              target={Math.round(user.dailyRequirement[0].pProtein)}
              color="#e8734f"
            />
          </div>
          <div>
            <NutrientRing
              label="fat"
              consumed={10}
              target={Math.round(user.dailyRequirement[0].pFat)}
              color="#b5ae4a"
            />
          </div>
          <div>
            <NutrientRing
              label="Calories"
              consumed={105}
              target={Math.round(user.dailyRequirement[0].pCalories)}
              color="#22C55E"
            />
          </div>

        </div>
      </div>
      <div className=' pl-10 pr-10'>
        <div className='w-full h-10 rounded-md text-start p-2 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] ' >
          <h1 >Suggested Food</h1>
        </div>
        <div className=' rounded-md w-50 p-5 mt-5 shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] flex flex-col justify-center items-center'>
          <h1 className='font-bold text-lg'>Food suggestions will be displayed here</h1>
        </div>
      </div>
    </div>
  )
}

export default Home