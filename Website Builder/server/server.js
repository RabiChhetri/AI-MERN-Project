require('dotenv').config();
const express =require('express');
const mongoose=require('mongoose');
const dns=require('dns');
dns.setServers(['8.8.8.8','8.8.4.4'])
const app =express()


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