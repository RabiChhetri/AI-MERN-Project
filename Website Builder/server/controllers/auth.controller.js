const userModel=require('../models/user.model')
const jwt=require('jsonwebtoken')

async function googleAuth(req,res){
    try{
        const {name,email,avata}=req.body
        if(!email){
            return res.status(400).json({message:'Email is required'})
        }
        const user=await userModel.findOne({email})
        if(!user){
            const newUser=await userModel.create({name,email,avatar})
        }
        const token= await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.cookie('token',token,{
            httpOnly:true,
            secure:false,
            sameSite:'strict',
            maxAge:7*24*60*60*1000
        })
        return res.status(200).json(user)
    }
    catch(error){
        return res.status(500).json({message:'Internal Server Error'})
    }
}


async function logOut(req,res) {
    try {
        return res.clearCookie('token',{
            httpOnly:true,
            secure:false,
            sameSite:'strict',
        })
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports={googleAuth,logOut}