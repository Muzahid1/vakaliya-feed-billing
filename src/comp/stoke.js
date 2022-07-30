import React, { useEffect, useState } from 'react'
import axios from "axios"
import Backbutton from '../Backbutton';

export default function Stoke() {

const srno = [0];

const [stoke, setstoke] = useState([])

useEffect(()=>{
    axios.post("http://localhost:3001/iteams").then((result)=>{
        setstoke(result.data);
    })
    
})

  return (
    <>
    <Backbutton/>
    <center>
        <div className='actable'>
            <h2>vakaliya feed stoke managenment</h2>
<br/>
<br/>
            <table>
                <thead>
                    <tr>
                       <td>sr no</td>
                       <td>iteam name</td>
                       <td>stoke</td>
                       
                    </tr>
                </thead>
                <tbody>
                {stoke.map(stoke=>{
                        return(
                    <tr key={Math.random()}>
                        <th>{srno[0]+=1}</th>
                        
                        <th>{stoke?.iteam}</th>
                        <th>{stoke?.quentity}</th>
                       
                    </tr> )})}
                </tbody>
            </table>
        </div>
    </center>
    </>
  )
}
