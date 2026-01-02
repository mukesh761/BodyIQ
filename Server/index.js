import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import userRouter from './Routes/userRoutes.js'
dotenv.config();
import cors from 'cors'
import foodRouter from './Routes/foodSuggestionRoutes.js'
import {islogin} from './Middleware/islogin.js'
import cookieParser from 'cookie-parser';
import modelRouter from './Routes/modelRoute.js'

//connection to database 
connectDB();
const app = express();
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true               // allow cookies
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/mukesh',islogin,(req,res)=>{
  res.send(req.user)
})
app.use('/model',modelRouter)

app.get('/',islogin,)

app.use('/user',userRouter)
app.use('/food',foodRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});