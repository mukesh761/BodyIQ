import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    },
    activityLevel:{
        type:String,
    },
    goal:{
        type:String,
    },
    currentBody:{
        type:String,
    },
    smokingStatus:{
        type:Boolean,
    },
    alcoholStatus:{
        type:Boolean,
    },
    BMI:{
        type:Number,
    },
    exerciseFrequency:{
        type:String,
    },
    dailyRequirement:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DailyRequirement'
    }]


},{ timestamps:true
})

export const userModel=mongoose.model('User',userSchema);