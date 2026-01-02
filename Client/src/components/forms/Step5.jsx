import React, { useState } from 'react'
import Exercise from '../../assets/exercise.png'

import moderate from '../../assets/moderate.png'
import active from '../../assets/active.png'
import sedentary from '../../assets/sedentary.png'
import { useNavigate } from 'react-router-dom'
import { pageContext } from '../../Context/pageContext';
import { useContext } from 'react';


const Step5 = () => {
    const [activity, setActivity] = useState(null)

    const activity_level = [
        { id: "sedentary", label: "sedentary", img: sedentary },
        { id: "light", label: "light", img: moderate },
        { id: "moderate", label: "moderate", img: moderate },
        { id: "active", label: "active", img: active },
    ];
   const { pages, setpages, pageData, setpageData } = useContext(pageContext)

    const navigate=useNavigate()
    const handleNext=()=>{
    setpages({...pages,page5:true})
    setpageData({...pageData,activityLevel:activity})
    navigate('/step6')

  }

  const handleBack=()=>{
    navigate('/step4')
  }
    return (
        <div className='rounded-md m-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)]' >
            <button className='cursor-pointer m-4 rounded-md hover:border transition-all duration-150 '>skip &gt;&gt;</button>
            <div className='upper flex flex-col justify-between items-center pl-2 pt-10 md:flex-row md:pl-15 md:pr-15 '>
                <div className='left flex flex-col gap-2'>
                    <div className='step-info flex gap-2'><p className='bg-green-500 rounded-full w-30 text-center'>step 5 of 6</p> <p>- keep going! </p></div>
                    <h2 className='text-xl font-semibold md:font-extrabold md:text-2xl'>Tell Us About your Activity Level</h2>
                    <p className='text-sm text-slate-600 md:text-lg md:font-semibold'>Tell us about your activity level so that we can suggest you nutrient that suit your body</p>
                </div>
                <div className='right'>
                    <img src={Exercise} alt="" />
                </div>
            </div>
            <div className='middle  rounded-lg  m-5 p-5 pb-0 '>
                <h1 className='text-xl font-bold mb-5'>How active are you?</h1>
                <div className='md:flex gap-2 items-center justify-between'>
                    {activity_level.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActivity(item.id)}
                            className={`
          cursor-pointer p-4 rounded-xl border-2 transition-all  md:w-[25%]
          ${activity === item.id
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

export default Step5