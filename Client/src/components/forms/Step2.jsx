import React, { useContext, useState } from 'react'
import Lifestyle from '../../assets/yourself.png'
import Slider from '@mui/material/Slider';
import exerciseImage from '../../assets/exercise.png'
import alocholImage from '../../assets/alcohol.png'
import HabitImage from '../../assets/yourhabit.png'
import stepImage from '../../assets/step.png'
import smokingImage from '../../assets/smoking.png'
import { useNavigate } from 'react-router-dom';
import { pageContext } from '../../Context/pageContext';



const Step2 = () => {
  const [exercise, setexercise] = useState(0)
  const [step, setstep] = useState(2000)
  const [alcohol, setalcohol] = useState(false)
  const [smoking, setsmoking] = useState(false)

  const navigate=useNavigate()
  const { pages, setpages, pageData, setpageData } = useContext(pageContext)

  const handleNext=()=>{
    setpages({...pages,page2:true})
    setpageData({...pageData,exerciseFrequency:exercise,dailySteps:step,alcoholConsumption:alcohol,smoking:smoking})
    navigate('/step3')

  }

  const handleBack=()=>{
    navigate('/step1')
  }
  return (
    <div className='rounded-md m-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)]' >
      <button className='cursor-pointer m-4 rounded-md hover:border transition-all duration-150 '>skip &gt;&gt;</button>
      <div className='upper flex flex-col justify-between items-center pl-2 pt-10 md:flex-row md:pl-15 md:pr-15 '>
        <div className='left flex flex-col gap-2'>
          <div className='step-info flex gap-2'><p className='bg-green-500 rounded-full w-30 text-center'>step 2 of 5</p> <p>- keep going! </p></div>
          <h2 className='text-xl font-semibold md:font-extrabold md:text-2xl'>Tell Us About your Habits</h2>
          <p className='text-sm text-slate-600 md:text-lg md:font-semibold'>Tell us about Habits so we can tailor the perfect plan to suit your goal</p>
        </div>
        <div className='right'>
          <img src={HabitImage} alt="" />
        </div>
      </div>
      <div className='middle  rounded-lg  m-5 p-5 pb-0'>
        {/* step */}
        <div className='p-10 md:flex md:justify-between flex-row gap-2 md:items-center md:flex-wrap'>
          <div className='md:w-[27%] shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p-2 rounded-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={stepImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>Steps</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{step} <p>steps/day</p></h1>

          </div>
          <div> <Slider
            className='w-60'
            value={step}
            min={1000}
            step={1}
            max={15000}
            size='medium'
            onChange={(e, newValue) => setstep(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          /></div>
          </div>

          {/* alcohol */}
           <div className='md:w-[25%] shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p-2 rounded-lg mt-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={alocholImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>Alcohol</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{alcohol} <p>{alcohol ? 'Yes' : 'No'}</p></h1>
          </div>
          <div className='flex justify-between'> 
            <button className='border border-red-500 rounded-lg p-2 w-25 hover:bg-red-200'
            onClick={() => setalcohol(true)}
            >Yes</button>
              <button className='border border-green-500 rounded-lg p-2 w-25 hover:bg-green-200' onClick={() => setalcohol(false)}>No</button>
          </div>
          </div>
          {/* exercise */}
           <div className='md:w-[25%] shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p-2 rounded-lg mt-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={exerciseImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>exercise</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{exercise} <p>days/week</p></h1>

          </div>
          <div> <Slider
            className='w-60'
            value={exercise}
            min={0}
            step={1}
            max={7}
            size='medium'
            onChange={(e, newValue) => setexercise(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            //  defaultValue={50}
          /></div>
          </div>
          {/* {smoking} */}
          <div className='md:w-[25%] shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p-2 rounded-lg mt-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={smokingImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>Smoking</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{smoking} <p>{smoking ? 'Yes' : 'No'}</p></h1>
          </div>
          <div className='flex justify-between'> 
            <button className='border border-red-500 rounded-lg p-2 w-25 hover:bg-red-200'
            onClick={() => setsmoking(true)}
            >Yes</button>
              <button className='border border-green-500 rounded-lg p-2 w-25 hover:bg-green-200' onClick={() => setsmoking(false)}>No</button>
          </div>
          </div>
        </div>
      </div>
      <div className='lower flex items-center justify-between p-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p rounded-md'>
        <button className='border h-8 w-18 rounded-lg cursor-pointer'
        onClick={handleBack}
        > &lt; Back</button>
        <button className='border h-8 w-18 rounded-lg bg-green-500 cursor-pointer'
        onClick={handleNext}
        >Next &gt;</button>
      </div>
    </div>
  )
}

export default Step2