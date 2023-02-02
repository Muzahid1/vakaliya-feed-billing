import React, {Suspense, lazy, useState } from "react";
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
   
    console.log(result)
    console.log(result.userdata.name);
    if (result.auth) {
      console.log("yes")
      history("/")
      // console.log(JSON.stringify(result.userdata.name));
      sessionStorage.setItem('user', JSON.stringify(result.userdata));
      sessionStorage.setItem('token', JSON.stringify(result.auth));
    } else {
      alert("please inter a valid user detail")
    }


  }

 

  document.title = "vakaliya feed login";


  return (
    <>
      <Suspense fallback={<div>please wait</div>} >
      <center>
        <div className="login">
         
          <img className="image" alt="" src={require('../img/login.png')}  height={100} width={100}/><br/>
          <label>inter mobile no</label> <br />
          <input  onChange={(e) => { setUsername(e.target.value) }} /><br />
           <label>inter email</label> <br />
          <input onChange={(e) => { setPass(e.target.value) }} /> <br />
          <br/>
          <button  onClick={Handlelogin}> <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a></button>

        </div>
      </center>
      </Suspense>
    </>
  )
}


