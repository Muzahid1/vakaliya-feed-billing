import React from "react";
 export default function Footer () {

  
    return (
        <>
        <footer style={{bottom: "20px"}} className="bg-dark text-center text-white">

  <div className="container p-4 pb-0">
    
    <section className="mb-4">
     
     
    </section>
    
  </div>
  

  
  <div className="text-center p-3" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}>
    © {  new Date().getMonth()}  {new Date().getFullYear()} Copyright :
    <a className="text-white" href="https://www.instagram.com/mr.muzu_04/"> vakaliya feed</a>
  </div>
 
</footer>
        </>
    );
 }