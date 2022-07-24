import React, { useCallback, useEffect, useState } from 'react';
import Backbutton from '../Backbutton';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';
function Acleader() {

  const [data, setData] = useState([]);

 
    useEffect(()=>{
      axios.get("http://localhost:3001/user").then((result) => {
        setData(result.data);
      });
    },[])
  
   
    // for (var srno=1; srno<10; srno++){
    //   return srno += srno;
      
    // }
    // document.getElementById("srno").innerHTML = srno;
const srno = [0]

  return (
   <>
   <Backbutton/>
   <div>
   
       <table>
        <thead>
          <tr>
            <th id='srno'>srno </th>
             <th>name</th>
             <th>action</th>
          </tr>
        </thead>
        {data.map(data=>{
      return (
       <>
        <tbody>
        
          <tr>
            
            <th>{srno[0] +=1}</th>
            <th>{data.name}</th>
            <th><Link to={"/update/"+ data.name}><button>view</button></Link></th>
          </tr>
        </tbody>
      
       </>
      );
    })} </table>
   </div>
   {/* <button onClick={loaddata} >load</button> */}
   </>
  )
}

export default Acleader