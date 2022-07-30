// const { dblClick } = require("@testing-library/user-event/dist/click");
const express = require("express");

// const { Router } = require("react-router-dom");
const route = express.Router();
// const mongoose = require("mongoose")
const muzahid = require("./model")


// route.post("/", (req, res) => {
//     let schema = new schema({
//      name : req.params.name
//     })
//     schema.save((err, sucess)=>{
//         if (err) throw err;
//         console.log("sucess")
//     })
   
   

// })

// module.exports.invoice =  function (req, res){
    //   let schema1 = new Schema({
    //     name : req.params.name
    //   })
    route.get("/find",  (req, res)=>{
    const muzahi = new muzahid();
    // const food = new food()
    muzahi.save({name:"muzahid"})
//    const rs = muzahid.find({})
//     res.send({rs})
    
     } )

     route.get("/finds", (req, res)=>{
       muzahid.find({}, (err, result)=>{
        if (err){console.log(err)}
        else{res.send(result)}
        
       })
      
     })
    
  
// }

// , (err, result)=>{

//     if (err) {console.log(err)}
//     else
//    { res.send(result)}
//   })



module.exports = route