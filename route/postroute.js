const express = require('express');
const {postmodel} = require('../model/postmodel.js')


const postRoute = express.Router()


postRoute.post('/add', async (req, res) => {

    try{
        const post = new postmodel(req.body)
        await post.save()
        res.status(200).json({msg:'Post Added',book:req.body})
    } catch(err){
        res.status(400).json({error:err.massage})
    }
})

postRoute.get('/',async(req,res)=>{
    const {postId} = req.query;

    try{
        if(postId){
            const post = await postmodel.findOne({_id:postId});
            res.status(200).json({msg:'All Posts',post})
        } else{
            const posts = await postmodel.find();
            res.status(200).json({msg:'All Posts',posts})
        }

    } catch(err){
        res.status(400).json({error:err.massage})
    }
})


postRoute.get('/update',async(req,res)=>{
    const {id} = req.query

    try{
        const post = await postmodel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).json({msg:'post updated',post})

    } catch(err){
        res.status(400).json({error:err.massage})
    }
})

postRoute.get('/delete',async(req,res)=>{
    const {id} = req.query

    try{
        const post = await postmodel.findByIdAndDelete({_id:id},req.body);
        res.status(200).json({msg:'post deleted',post})

    } catch(err){
        res.status(400).json({error:err.massage})
    }
})

module.exports = { postRoute }