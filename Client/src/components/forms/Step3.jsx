import React, { useState } from 'react'
import Lifestyle from '../../assets/yourself.png'
import Slider from '@mui/material/Slider';
import exerciseImage from '../../assets/exercise.png'
import skinnyImg from '../../assets/skinny.png'
import normalImg from '../../assets/normal.png'
import fatImg from '../../assets/fat.png'
import { useNavigate } from 'react-router-dom';
import { pageContext } from '../../Context/pageContext';
import { useContext } from 'react';



const Step3 = () => {
  const [selected, setSelected] = useState(null)

  const bodyTypes = [
  { id: "skinny", label: "Skinny", img: skinnyImg },
  { id: "normal", label: "Normal", img: normalImg },
  { id: "fat", label: "Fat", img: fatImg }
];
  const navigate=useNavigate()
const { pages, setpages, pageData, setpageData } = useContext(pageContext)

const handleNext=()=>{
    setpages({...pages,page3:true})
    setpageData({...pageData,currentBodyType:selected})
    navigate('/step4')
  }

  const handleBack=()=>{
    navigate('/step2')
  }
  return (
    <div className='rounded-md m-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)]' >
      <button className='cursor-pointer m-4 rounded-md hover:border transition-all duration-150 '>skip &gt;&gt;</button>
      <div className='upper flex flex-col justify-between items-center pl-2 pt-10 md:flex-row md:pl-15 md:pr-15 '>
        <div className='left flex flex-col gap-2'>
          <div className='step-info flex gap-2'><p className='bg-green-500 rounded-full w-30 text-center'>step 3 of 5</p> <p>- keep going! </p></div>
          <h2 className='text-xl font-semibold md:font-extrabold md:text-2xl'>Tell Us About your current Body Type</h2>
          <p className='text-sm text-slate-600 md:text-lg md:font-semibold'>Tell us about your current body type so we can tailor the perfect plan to suit your goal</p>
        </div>
        <div className='right'>
          <img src={Lifestyle} alt="" />
        </div>
      </div>
      <div className='middle  rounded-lg  m-5 p-5 pb-0 '>
            <h1 className='text-xl font-bold mb-5'>Current Body Type</h1>
         <div className='md:flex gap-2 items-center justify-between'>
          {bodyTypes.map((item) => (
      <div
        key={item.id}
        onClick={() => setSelected(item.id)}
        className={`
          cursor-pointer p-4 rounded-xl border-2 transition-all  md:w-[25%]
          ${selected === item.id 
            ? "border-green-500 bg-green-50 scale-105"
            : "border-gray-300 hover:border-green-400"}
        `}
      >
        <img
          src={item.img}
          alt={item.label}
          className="h-32 w-32 object-contain"
        />
        <p className="text-center font-semibold mt-2">
          {item.label}
        </p>
      </div>
    ))}
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

export default Step3