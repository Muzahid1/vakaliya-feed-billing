const { dblClick } = require("@testing-library/user-event/dist/click");
const { Db } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");






app.use(cors());
app.use(express.json());
app.listen(3001, () => {
  console.log("app runing at port 3001");
})





const mongoose = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
mongoose.connect(url, (err, Db) => {
  if (err) {
    console.log("err");
  } else {
    console.log("connacted");
  }
  const database = Db.db("vakaliya");

  app.post("/register", (req, res) => {

    const { firstname, lastname, position, businessarea, employ, farm, capacity, start, ainfo, zip, place, country, mobile, email } = req.body;
    mydata = {
      name: firstname,
      lname: lastname,
      position: position,
      businessarea: businessarea,
      employ: employ,
      farm: farm,
      capacity,
      start,
      ainfo,
      zip,
      place,
      country,
      mobile,
      email

    }
    database.collection("registration").insertOne(mydata, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("sucess");
      }
    })
  });

  app.get("/user", (err, res) => {

    database.collection("registration").find({}).toArray((err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result)
        // console.log(result);

      }
    })

  });


  app.post("/suser/:data1", (req, res) => {
    const data1 = req.params.data1;
    query = { name: data1 }
    database.collection("registration").find(query).toArray((err, result1) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result1)
      }
    })
  });


  app.post("/login", async (req, res) => {
    
    const userdata = await database.collection("registration").findOne(req.body);
    
    if (userdata) {
      console.log("sucess")
      res.setHeader("valid", "valid user")
      res.send({ userdata })
      

    } else {
      // res.setHeader("invalid", "invalid user")
      res.send({status : "invalid"})

    }
  }
  )




  app.post("/stoke/:value", (req, res) => {
    const value = req.params.value;
    const valuequery = { iteam: value };
    const { invoice, iteam, quentity, price } = req.body;

    database.collection("food").find(valuequery).toArray((err, results) => {
      const upd = results[0].quentity;
      console.log(upd);

      const quentity1 = Number(upd) + Number(quentity);
      console.log(quentity1)
      const mydata = {
        $set: {
          // iteam : value,
          invoice,

          quentity: quentity1,
          price
        }
      }
      database.collection("food").updateOne(valuequery, mydata, (err, res) => {
        if (err) throw err;
        console.log("inserted")
      })
    })
  })
  app.post("/invoice", (req, res) => {
    const { name, invoiceno, date, iteam, price, Quentity, total, shipping } = req.body;
    const mydata = {
      name,
      iteam,
      price,
      Quentity,
      total,
      date,
      shipping
    }
    database.collection("invoice").insertOne(mydata, (err, res) => {
      if (err) throw err;
      console.log("invoice generated");
    })
  })

  app.post("/iteam", (req, res) => {
    const { iteam } = req.body;
    const iteam2 = {iteam : iteam}

    const mydata = {
      iteam,
      quentity: "0"
    }
   const rs =  database.collection("food").findOne(iteam2, (err, result)=>{

   if (result){
    var iteam1 = result.iteam;
    res.send({result})
   }
    
    // console.log(iteam1)
    // database.collection("food").deleteMany({iteam : "abc"})
    if ( iteam !== iteam1){
    if (iteam !== null) {
     database.collection("food").insertOne(mydata, (err, res) => {
        if (err) throw err;
        // console.log("jnj")
       
      })
    }};
  });

  })

  app.post("/iteams", (req, res) => {
    const iteam = req.params.iteam;
    database.collection("food").find({}).toArray((err, result) => {
      if (err) { console.log(err) }
      else { res.send(result) }
    })
  });

  app.post("/iteams/:iteam", (req, res) => {
    const iteam = req.params.iteam;
    database.collection("food").find({iteam : iteam}).toArray((err, result) => {
      if (err) { console.log(err) }
      else { res.send(result) }
    })
  });

  app.post("/product/:name", (req, res) => {
    const name = req.params.name;
    const query = { name: name }
    database.collection("registration").find(query).toArray((err, result) => {
      res.send(result)
    })
    // console.log(name);
  })

app.put("/acleader", (req, res)=>{
  const name = req.body.name;
  
  database.collection("acleader").insertOne({name })
})


  //  database.collection("invoice").deleteMany({name : "nfiobm"})

});

// module.exports = database;