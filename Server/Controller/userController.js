import { userModel } from '../Schema/userSchema.js'
import { genToken } from '../utils.js'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { DailyRequirement } from '../Schema/dailyRequirement.js'
export const signUp = async (req, res) => {
    try {
        console.log('signing up user')
        const { name, email, password, dob } = req.body;
        console.log({ name, email, password, dob })
        const user = await userModel.findOne({ email })
        // console.log(user)
        if (user) {
            return res.json({ message: 'user already exist' })

        }
        const salt = await bcrypt.genSalt(10)
        const hasPass = await bcrypt.hash(password, salt)
        const newUser = await userModel.create({ name, email, password: hasPass, dob })
        // console.log(newUser)
        const token = genToken(newUser)
        console.log({ token })
         res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
   path: "/",  // Ensures the cookie works across subdomains
    maxAge: 3600000*24*30,
});
        const created_user = { name: newUser.name, email: newUser.email, dob: newUser.dob }
         return res.json({ user: created_user })
    } catch (error) {
        if (error) {
            res.send(error);
        }
    }
}

//Login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await userModel.findOne({ email })
        if (!user) {
            res.json({ message: 'email is incorrect' })
            return
        }
        const verifiedPass = await bcrypt.compare(password, user.password)
        if (!verifiedPass) {
            res.json({ message: 'password is incorrect' })
            return
        }
        console.log('working up to here')
         const token = genToken(newUser)
        console.log(token)
        res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
   path: "/",  // Ensures the cookie works across subdomains
    maxAge: 3600000*24*30,
});
        res.json({ user })
        return

    } catch (error) {
        if (error) {
            res.json({ error })
        }
    }
}

export const addinfo = async (req, res) => {
  try {
    const {
      activityLevel,
      alcoholConsumption,
      calorieIntake,
      currentBodyType,
      dailySteps,
      exerciseFrequency,
      fatIntake,
      goalBodyType,
      height,
      proteinIntake,
      sleepHours,
      smoking,
      weight
    } = req.body;

    const user = req.user;

    console.log(user)
    const BMI = (weight / ((height / 100) ** 2)).toFixed(2);

   
    const dailyRequirement = await DailyRequirement.create({
      userId: user._id,
      dCalories: calorieIntake,
      dProtein: proteinIntake,
      dFat: fatIntake,
      steps: dailySteps,
      sleepHours: sleepHours
    });

    // Update User
    const updatedUser = await userModel.findByIdAndUpdate(
      user._id,
      {
        height,
        weight,
        BMI,
        activityLevel,
        goal: goalBodyType,
        smokingStatus: smoking,
        alcoholStatus: alcoholConsumption,
        currentBody: currentBodyType,
        exerciseFrequency,
        $push: {
          dailyRequirement: dailyRequirement._id
        }
      },
      { new: true }
    ).populate("dailyRequirement");

    return res.status(200).json({
      message: "Additional info added successfully",
      user: updatedUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
