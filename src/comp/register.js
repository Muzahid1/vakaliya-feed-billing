import React, { useState } from "react";
import Backbutton from "../Backbutton";

import './registr.css';
const axios = require("axios");



function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [position, setPosition] = useState("");
  const [bs, setBs] = useState("");
  const [employ, setEmploy] = useState("");
  const [farm, setFarm] = useState("");
  const [capacity, setCapacity] = useState("");
  const [start, setStrat] = useState("");
  const [ainfo, setAinfo] = useState("");
  const [zip, setZip] = useState("");
  const [Place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");


  const [add, setAdd] = useState([]);


  const Handledata = () => {

    axios.post("http://localhost:3001/register", {
      firstname: fname,
      lastname: lname,
      position: position,
      businessarea: bs,
      employ: employ,
      farm: farm,
      capacity: capacity,
      start: start,
      ainfo: ainfo,
      zip: zip,
      Place: Place,
      country: country,
      mobile: mobile,
      email: email,

    }).then(() => {
      setAdd([add, {
        firstname: fname,
        lastname: lname,
        position: position,
        businessarea: bs,
        employ: employ,
        farm: farm,
        capacity: capacity,
        start: start,
        ainfo: ainfo,
        zip: zip,
        Place: Place,
        country: country,
        mobile: mobile,
        email: email,
      },

      ]);
    })

  }



  document.title = "vakaliya feed";
  return (
    <>
    <Backbutton/>
      <div className="mycss">
        <div className="container">

          <div className="form-horizontal">


            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">firstname:</label>
              <div className="col-sm-10">

                <input onChange={(e) => { setFname(e.target.value) }} name="firstname" type="text" id="form3Examplev2" className="form-control" />

              </div>

            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">last name:</label>
              <div className="col-sm-10">
                <input onChange={(e) => { setLname(e.target.value) }} name="lastname" type="text" id="form3Examplev3" className="form-control" />

              </div>

            </div>




            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">farm name:</label>
              <div className="col-sm-10">
                <input onChange={(e) => { setPosition(e.target.value) }} name="position" type="text" id="form3Examplev4" className="form-control form-control-lg" />

              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">business area:</label>
              <div className="col-sm-10">

                <div className="form-outline">
                  <input onChange={(e) => { setBs(e.target.value) }} name="businessarea" type="text" id="form3Examplev5" className="form-control form-control-lg" />

                </div>

              </div>

            </div>





            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">Street + nr:</label>
              <div className="col-sm-10">
                <input onChange={(e) => { setStrat(e.target.value) }} type="text" id="form3Examplea2" className="form-control form-control-lg" />

              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">additional information:</label>
              <div className="col-sm-10">
                <input onChange={(e) => { setAinfo(e.target.value) }} type="text" id="form3Examplea3" className="form-control form-control-lg" />

              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">zip code:</label>
              <div className="col-sm-10">

                <div className="form-outline form-white">
                  <input onChange={(e) => { setZip(e.target.value) }} type="text" id="form3Examplea4" className="form-control" />

                </div>

              </div>

            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">palace:</label>
              <div className="col-sm-10">

                <div className="form-outline form-white">
                  <input onChange={(e) => { setPlace(e.target.value) }} type="text" id="form3Examplea4" className="form-control" />

                </div>

              </div>

            </div>



            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">mobile no:</label>
              <div className="col-sm-10">
                <input onChange={(e) => { setMobile(e.target.value) }} type="text" id="form3Examplea7" className="form-control form-control-lg" />

              </div>

            </div>


            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">Email:</label>
              <div className="col-sm-10">
                <input onChange={(e) => { setEmail(e.target.value) }} type="text" id="form3Examplea9" className="form-control form-control-lg" />

              </div>

             

            

            </div>

          
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button onClick={Handledata} type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
}
export default Register;