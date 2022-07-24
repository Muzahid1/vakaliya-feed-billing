const express = require("express");
const { Router } = require("react-router-dom");
const route = express.Router();

route.get("/", (req, res)=>{
    res.send({data: "data"})
})

// Router.get("/something", (req, res)=>{
//     res.send("something")
// })

// Router.get("/something2", (req, res)=>{
//     res.send("something2")
// })

// Router.get("/something3", (req, res)=>{
//     res.send("something2")
// })




module.exports = route;