import express from 'express'
import {login,signUp,addinfo} from '../Controller/userController.js'
import { islogin } from '../Middleware/islogin.js'

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('this is user route')
})

router.post('/login',login)
router.post('/signup',signUp)
router.post('/addinfo',islogin,addinfo)

export default router
