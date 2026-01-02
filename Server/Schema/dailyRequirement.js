import mongoose from 'mongoose';

const dailyRequirementSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    dCalories:{
        type:Number,
    },
    dProtein:{
        type:Number,
    },
    dFat:{
        type:Number,
    },
    pCalories:{
        type:Number,
    },
    pProtein:{  
        type:Number,
    },
    pFat:{
        type:Number,
    },
    steps:{
        type:Number,
    },
    sleepHours:{
        type:Number,
    }

})

export const DailyRequirement=mongoose.model('DailyRequirement',dailyRequirementSchema);