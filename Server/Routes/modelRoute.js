import express from 'express'
import { getNutritionFromML } from '../Controller/modelController.js'
import { islogin } from '../Middleware/islogin.js'
const router=express.Router()

router.post('/predict',islogin,getNutritionFromML)

export default router