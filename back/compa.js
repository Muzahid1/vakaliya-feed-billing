const express = require("express");
const app = express()

const routeHome = require("./compb")
app.use("/", routeHome)

// app.get("/home", (req, res)=>{
//    res.send("home")
// })


app.listen(3006, ()=>{
    console.log("app running");
})
