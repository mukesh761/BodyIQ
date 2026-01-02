import express from 'express'
import { foodSuggestion } from '../Controller/foodSuggestionController.js'
const router=express.Router()

router.post('/recommend-food',foodSuggestion)

export default router