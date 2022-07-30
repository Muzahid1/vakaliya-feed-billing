import React, { useState } from "react";
import {Outlet, Link, useNavigate} from "react-router-dom";
import Backbutton from "../Backbutton";
import './comp.css'
 const Navbar = () =>{

   const auth = sessionStorage.getItem('user');
   const history = useNavigate();
   const Login = ()=>{
    sessionStorage.clear();
    history('/login');
   }

    return(
        <>

        
         <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      { auth ? 
      
      <a className="navbar-brand" >vakaliya feed admin</a> :
      <a className="navbar-brand" >vakaliya feed  </a>
     
      }
    </div>
      
    <div className="collapse navbar-collapse" id="myNavbar">
    { auth ? 
    <ul className="nav navbar-nav">
         
        <li>  <Link to="/" className="active"> Home</Link></li>
         
         <li > <Link to="/Contact" >bill</Link></li>
       <li> <Link to="/register" > registration</Link></li>
       <li><Link to="/about">about</Link> </li>
       
       <li  className="nav navbar-nav navbar-right"> <Link to="/login"  onClick={Login}> <span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>

      </ul>
      
       :
      <ul className="nav navbar-nav navbar-right">
       {/* <li> <Link to="/login"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li> */}
       <li><Link to="/about">about</Link> </li>
       <li  onClick={Login}> <Link to="/login"> <span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
       
      </ul> }
    </div> 
  </div>
</nav>




        </>
    )
 }
 export default Navbar;