import React from "react";
import { useState } from "react";
import { createContext } from "react";
const pageContext=createContext()

const PageContextProvider=({children})=>{
    const [pages, setpages] = useState({
        page1:false,
        page2:false,
        page3:false,
        page4:false,
        page5:false,
        page6:false,
    })
    const [pageData, setpageData] = useState({
        age:null,
        height:null,
        weight:null,
        sleepHours:null,
        exerciseFrequency:null,
        dailySteps:null,
        alcoholConsumption:null,
        smoking:null,
        calorieIntake:null,
        proteinIntake:null,
        fatIntake:null,
        BMI:null,
        currentBodyType:null,
        goalBodyType:null,
        activityLevel:null,
    })
    // ['age', 'height', 'weight', 'sleep_hours', 'exercise_frequency',
    //    'daily_steps', 'alcohol_consumption', 'smoking', 'calorie_intake',
    //    'protein_intake', 'fat_intake', 'BMI', 'current_body_type_normal',
    //    'current_body_type_overweight', 'current_body_type_skinny',
    //    'goal_body_type_fat_loss', 'goal_body_type_muscle_gain',
    //    'goal_body_type_recomposition', 'activity_level_active',
    //    'activity_level_light', 'activity_level_moderate',
    //    'activity_level_sedentary']
    return (
        <pageContext.Provider value={{pages,setpages,pageData,setpageData}}>
            {children}
        </pageContext.Provider>
    )
}
export {pageContext,PageContextProvider};