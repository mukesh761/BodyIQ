import axios from "axios";
import { userModel } from "../Schema/userSchema.js";

export const getNutritionFromML = async (req, res) => {
  try {
    const user = req.user;
  

    // ---- 1️⃣ Encode categorical fields ----

    let current_body_type_normal
     let  current_body_type_overweight
     let  current_body_type_skinny

    if(user.currentBody=='skinny'){
      current_body_type_normal=0
      current_body_type_overweight=0
      current_body_type_skinny=1

    }
    else if(user.currentBody=='normal'){
      current_body_type_normal=1
      current_body_type_overweight=0
      current_body_type_skinny=0
    }
    else if(user.currentBody=='fat'){
       current_body_type_normal=0
      current_body_type_overweight=1
      current_body_type_skinny=0
    }

    let goal_body_type_fat_loss
      let goal_body_type_muscle_gain
      let goal_body_type_recomposition

    if (user.goal=='muscles-gain'){
        goal_body_type_fat_loss=0
       goal_body_type_muscle_gain=1
      goal_body_type_recomposition=0
    }
    else if(user.goal=='Recomposition'){
       goal_body_type_fat_loss=0
       goal_body_type_muscle_gain=0
      goal_body_type_recomposition=1
    }
    else if (user.goal=='fat-loss'){
      goal_body_type_fat_loss=1
       goal_body_type_muscle_gain=0
      goal_body_type_recomposition=0
    }

    let activity_level_active
     let  activity_level_light
     let  activity_level_moderate
     let  activity_level_sedentary
    if(user.activityLevel=='sedentary'){
       activity_level_active=0
       activity_level_light=0
       activity_level_moderate=0
       activity_level_sedentary=1
    }
    else if (user.activityLevel=='light'){
      activity_level_active=0
       activity_level_light=1
       activity_level_moderate=0
       activity_level_sedentary=0
    }
     else if (user.activityLevel=='moderate'){
      activity_level_active=0
       activity_level_light=0
       activity_level_moderate=1
       activity_level_sedentary=0
    }
     else if (user.activityLevel=='active'){
      activity_level_active=1
       activity_level_light=0
       activity_level_moderate=0
       activity_level_sedentary=0
    }
    

    // ---- 2️⃣ Build ML payload (NUMBERS ONLY) ----

    const mlPayload = {
      age:25, // or calculate from DOB
      height: Number(user.height),
      weight: Number(user.weight),
      sleep_hour: Number(user.sleepHours || 7),
      exercise_frequency: Number(user.exerciseFrequency || 3),
      alcohol_consumption: user.alcoholStatus ? 1 : 0,
      smoking: user.smokingStatus ? 1 : 0,
      calorie_intake: user.dailyRequirement?.[user.dailyRequirement.length - 1].dCalorie||180,
      protein_intake: user.dailyRequirement?.[user.dailyRequirement.length - 1].dProtein||120,
      fat_intake: user.dailyRequirement?.[user.dailyRequirement.length - 1].dFat||100,
      BMI: Number(user.BMI),
      daily_steps:user.dailyRequirement?.[user.dailyRequirement.length - 1].steps||5000,
      current_body_type_normal,
      current_body_type_overweight,
      current_body_type_skinny,

      goal_body_type_fat_loss,
      goal_body_type_muscle_gain,
      goal_body_type_recomposition,

      activity_level_active,
      activity_level_light,
      activity_level_moderate,
      activity_level_sedentary
    };

    // ---- 3️⃣ Send to ML API ----

    const mlResponse = await axios.post(
      "http://localhost:8000/predict",
      mlPayload
    );

    // ---- 4️⃣ Send response to frontend ----
    res.json({
      success: true,
      mlInput: mlPayload,
      recommendation: mlResponse.data
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "ML service error" });
  }
};
