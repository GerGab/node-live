// imports
import { Router } from "express";

// instances
const livenessRouter = new Router()

livenessRouter.all('*',(req,res)=>{
    res.sendStatus(200)
})

export default livenessRouter