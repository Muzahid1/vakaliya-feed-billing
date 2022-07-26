import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./comp/sidebar";
import "./home.css";
 

export default function Home ()  {
 
  return(
    <>
    
    <div className="list">
      <Link to="purchase">
     <div className="order">
     purches invoice

     <img src={require('./img/purchase.jpg')}  height={100} width={100}/>
    
     </div></Link>
     <Link to="contact">
     <div className="order">
     
    <p style={{color : "black"}} > sale invoice</p>
      <img src={require('./img/purchase.jpeg')} height={100} width={100}/>
     </div></Link>
     <Link to="acleader">
     <div className="order">
      ac leader
      <img src={require('./img/acleader.jpg')} height={130} width={130}/>
     </div></Link>
     <Link to='stoke'>
     <div className="order">
      stoke
      <img src={require('./img/stoke.jpg')} height={130} width={130}/>
     </div></Link>
     </div>
    <Sidebar/>
    </>
  );
 }
   




   
