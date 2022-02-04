import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'


import authRoute from './routes/auth.js'


const app = express()


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(cors())
app.use(express.json({extended: true }))
app.use(express.urlencoded({extended:true}))
app.use(helmet());
app.use(limiter);
app.use("/api/v1/auth", authRoute)




app.listen(4000, ()=>{
  console.log("app listening at port 4000");
})