const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
const invoice = require("./acleader")


mongoose.connect('mongodb://localhost:27017/vakaliya',function(err){
    
  if(err){
    console.log("db connection fail .. .. .")
    console.log(err)
  }else{
    console.log("db connected......")
  }
})


app.use("/invoice", invoice)



app.listen(5000,function(){
    console.log("server started on 5000");  
  })


