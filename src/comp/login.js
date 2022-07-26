import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';



export default function Login() {
  const history = useNavigate();
  const [mobile, setUsername] = useState("");
  const [email, setPass] = useState("");



  async function Handlelogin() {
    let result = await fetch("http://localhost:3001/login",
      {
        method: "POST",

        body: JSON.stringify({
          mobile,
          email,
        }),
        headers: {
          "Content-type": "application/json"
        },

      })
    result = await result.json();
    console.log(result);
    console.log(result)
    if (result.userdata) {
      console.log("yes")
      history("/")
      // console.log(JSON.stringify(result.userdata.name));
      sessionStorage.setItem('user', JSON.stringify(result.userdata));
    } else {
      alert("please inter a valid user detail")
    }


  }



  document.title = "vakaliya feed login";


  return (
    <>
      <center>
        <div className="login">

          <label>inter mobile no</label> <br />
          <input onChange={(e) => { setUsername(e.target.value) }} /><br />
           <label>inter email</label> <br />
          <input onChange={(e) => { setPass(e.target.value) }} /> <br />
          <br/>
          <button  onClick={Handlelogin}>login</button>

        </div>
      </center>
    </>
  )
}


