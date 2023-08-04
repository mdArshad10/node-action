import express from 'express';

const app = express()

app.get("/testNode",(req,res)=>{
    res.status(200).json({message:`this is action testing`})
})

export default app;