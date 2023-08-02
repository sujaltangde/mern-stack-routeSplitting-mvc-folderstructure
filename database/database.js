import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const DB = process.env.DB

export const connectDB = ()=>{
    mongoose.connect(DB,{
        dbName: "backendapi",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        writeConcern: {
            w: 'majority'
          }
    }).then(()=>{
        console.log("Database connected successfully")
    }).catch((err)=>{
        console.log(err)
    })
}