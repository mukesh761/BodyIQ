import React, { useContext } from 'react'
import NutrientRing from '../NutrientRing.jsx'
import { mloutputContext } from '../../Context/mloutput.jsx'
import { userContext } from '../../Context/userContext.jsx'

const Home = () => {
  const {output,setoutput}=useContext(mloutputContext)
  const {user,setuser}=useContext(userContext)
  console.log(output)
  return (
    <div>
      <div className='p-10'>
        <div>
          <h1 className='font-bold text-xl text-blue-500'>
            BodyIQ
          </h1>
        </div>
        <div>
          <h1 className='font-semibold text-xl '>Welcome Back ,Mukesh  !</h1>
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
              target={Math.round(output[0][1])}
              color="#e8734f"
            />
          </div>
          <div>
            <NutrientRing
              label="fat"
              consumed={10}
              target={Math.round(output[0][2])}
              color="#b5ae4a"
            />
          </div>
          <div>
            <NutrientRing
              label="Calories"
              consumed={105}
              target={Math.round(output[0][0])}
              color="#22C55E"
            />
          </div>
          <div>
            <NutrientRing
              label="Carbs"
              consumed={100}
              target={Math.round(output[0][3])}
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
          <h1 className='font-semibold ' >food Name</h1>
          <p>calories:120 kcl</p>
          <p>protein:20 g</p>
          <p>fat:10 g</p>
          <p>type: Veg</p>
          <button>Add this</button>
        </div>
      </div>
    </div>
  )
}

export default Home