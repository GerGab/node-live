import express from "express";
import livenessRouter from "./src/routers/livenessRoutes.js";
import webRouter from "./src/routers/webRoutes.js";

//==== INSTANCES ====
const app = express()

//=== MIDDLEWARES ===
app.use(express.json())
app.use(express.static("public"))

// ==== ROUTES ===

app.use('/web',webRouter)
app.use('/liveness',livenessRouter)

// ===== MOUNTING SERVER =====
const PORT = 8080

const server = app.listen(PORT, () =>{
    console.log(`Servidor express escuchando en el puerto ${PORT}  - PID WORKER - ${process.pid}`)
})

server.on("error", error => console.log(`Error en servidor ${error}- PID WORKER - ${process.pid}`))

export {app }