
import React, { useState } from "react";

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
    if (result) {
      console.log("yes")
      history("/")
      // console.log(JSON.stringify(result.userdata.name));
      sessionStorage.setItem('user', JSON.stringify(result.userdata));
    } if (result === "invalid user") {
      alert("invalid data")
    }


  }



  document.title = "vakaliya feed login";


  return (
    <>

     

      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        onChange={(e) => { setUsername(e.target.value) }} />

                      <label className="form-label" htmlFor="typeEmailX">
                        mobile
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        // type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={(e) => { setPass(e.target.value) }} />
                      <label className="form-label" htmlFor="typePasswordX">
                        email
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={Handlelogin} >
                      Login
                    </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      

    </>
  )
}


