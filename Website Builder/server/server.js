require('dotenv').config();
const express =require('express');
const mongoose=require('mongoose');
const authRouter=require('./routers/auth.route')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const dns=require('dns');

dns.setServers(['8.8.8.8','8.8.4.4'])

const app =express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/api/auth',authRouter)

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((error)=>{
    console.error("Error connecting to MongoDB:",error)
})

app.listen(3000,()=>{
    console.log("Server is running on the port 3000")
})