import express from 'express'
import userRoute from './routes/User.js'

export const app = express() ;

app.use("/users" ,userRoute);
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("HEY")
})











