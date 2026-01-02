import React, { useContext, useState } from 'react'
import Lifestyle from '../../assets/yourself.png'
import Slider from '@mui/material/Slider';
import ageImage from '../../assets/age.png'
import weightImage from '../../assets/weight.png'
import heightImage from '../../assets/height.png'
import sleepImage from '../../assets/sleep.png'
import { pageContext } from '../../Context/pageContext';
import {useNavigate} from 'react-router-dom'


const Step1 = () => {
  const [sleep, setsleep] = useState(8)
  const [height, setheight] = useState(160)
  const [weight, setweight] = useState(68)

  const {pages,setpages,pageData,setpageData}=useContext(pageContext)
  const navigate=useNavigate()
  const handleNext=()=>{
    setpages({...pages,page1:true})
    setpageData({...pageData,height:height,weight:weight,sleepHours:sleep})
    navigate('/step2')

  }
  return (
    <div className='rounded-md m-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)]' >
      <button className='cursor-pointer m-4 rounded-md hover:border transition-all duration-150 '>skip &gt;&gt;</button>
      <div className='upper flex flex-col justify-between items-center pl-2 pt-10 md:flex-row md:pl-15 md:pr-15 '>
        <div className='left flex flex-col gap-2'>
          <div className='step-info flex gap-2'><p className='bg-green-500 rounded-full w-30 text-center'>step 1 of 5</p> <p>- keep going! </p></div>
          <h2 className='text-xl font-semibold md:font-extrabold md:text-2xl'>Tell us about Lifestyle</h2>
          <p className='text-sm text-slate-600 md:text-lg md:font-semibold'>Tell us about yourself so we can tailor the perfect plan to suit your goal</p>
        </div>
        <div className='right'>
          <img src={Lifestyle} alt="" />
        </div>
      </div>
      <div className='middle  rounded-lg  m-5 p-5 pb-0'>
        <div className='p-10 md:flex md:justify-between md:items-center'>
          <div className='md:w-[25%] md:shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] md:p-2 md:rounded-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={heightImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>Height</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{height} <p>cm</p></h1>

          </div>
          <div> <Slider
            className='w-60'
            value={height}
            min={100}
            step={1}
            max={250}
            size='medium'
            onChange={(e, newValue) => setheight(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          /></div>
          </div>

          {/* weight */}
           <div className='md:w-[25%] md:shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] md:p-2 md:rounded-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={weightImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>Weight</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{weight} <p>kg</p></h1>
          </div>
          <div> <Slider
            className='w-60'
            value={weight}
            min={30}
            step={1}
            max={250}
            size='medium'
             onChange={(e, newValue) => setweight(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            // defaultValue={100}
          /></div>
          </div>
          {/* weight */}
           <div className='md:w-[25%] md:shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] md:p-2 md:rounded-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img src={sleepImage} alt="" className='h-10 w-10 md:h-25 md:w-25' />
              <h1 className='text-lg font-bold'>sleep</h1>

            </div>
            <h1 className='flex text-lg font-bold'>{sleep} <p>hrs</p></h1>

          </div>
          <div> <Slider
            className='w-60'
            value={sleep}
            min={0}
            step={1}
            max={15}
            size='medium'
            onChange={(e, newValue) => setsleep(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            //  defaultValue={50}
          /></div>
          </div>
        </div>
      </div>
      <div className='lower flex items-center justify-between p-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p rounded-md'>
        <button className='border h-8 w-18 rounded-lg bg-green-500 cursor-pointer'
        onClick={handleNext}
        >Next &gt;</button>
      </div>
    </div>
  )
}

export default Step1