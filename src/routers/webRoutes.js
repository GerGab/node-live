// imports
import { Router } from "express";

// instances
const webRouter = new Router()

webRouter.all('*',(req,res)=>{
    res.status(200).json({status:"okey"})
})

export default webRouter