const mongoose = require("mongoose")

let MuzahidSchema =new mongoose.Schema({
  
    name :{
        type : String
    }
    // iteam :{
    //     type : String
    // },
    // price :{
    //     type : String
    // },
    //  Quentity :{
    //     type : String
    // },
    // total :{
    //     type : String
    // },
    // date :{
    //     type : String
    // },
    // shipping :{
    //     type : String
    // }
})
 
const MuzahidModel =  mongoose.model("invoic", MuzahidSchema)
module.exports = MuzahidModel

// name
// "aehmad"
// iteam
// "phase 1"
// price
// "1115"
// Quentity
// "6"
// total
// "1115"
// date
// ""
// shipping
