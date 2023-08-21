const express = require('express');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { userModel } = require('../model/usermodel.js')

const userRouter = express.Router()

userRouter.post('/register', async (req, res) => {
    const {name,email,password,age,city,is_married} = req.body;

    try{
        const already = await userModel.findOne({email})
        if(already){
            res.status(200).json({msg:"User already exist, please login"})
        } else{
            bcrypt.hash(password, 5, async(err, hash)=>{
                if(err){
                    res.status(400).json({error:err.massage})
                } else{
                    const user = new userModel({name,email,password:hash,age,city,is_married})
                    await user.save()
                    res.status(200).json({msg:'login Successful',user})
                }
            })
            
        }
    } catch(err){
        res.status(400).json({error:err.massage})
    }
    
})


userRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    try{
        const user = await userModel.findOne({email})

        if(user){
            bcrypt.compare(password, hash.password, (err, result)=>{
                if(result){
                    var token = jwt.sign({ foo: 'bar' }, "masai", { expiresIn: 10000 });
                    res.status(200).json({msg:"login successful",token})
                } else{
                    res.status(400).json({error:err.massage})
                }
            })
        }
        
    } catch(err){
        res.status(400).json({error:err.massage})
    }
})

module.exports = { userRouter }