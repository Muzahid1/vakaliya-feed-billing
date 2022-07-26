import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Backbutton from '../Backbutton'

function Purchase() {

    const [iteam, setiteam] = useState();
    const [iteam1, setiteam1] = useState()
    const [quentity, setquentity] = useState();
    const [price, setprice] = useState();
    const [invoice, setinvoice] = useState()
    const [data, setdata] = useState();
    const [data2, setdata2] = useState([])
    const [value, setvalue] = useState()

    const data4 = [{
        name : "muzahid"
    },
    {
      name : "aehmad"  
    },
    {
        name : "kjhfvgnjksdhvsjkdvhbsjd,"
    }
]

function dbinsert (){
    axios.post(`http://localhost:3001/stoke/${value}`, {
        invoice : invoice,
        iteam : iteam,
        quentity : quentity,
        price : price
    }).then(()=>{
        setdata([data, {
            invoice : invoice,
            iteam : iteam,
            quentity : quentity,
            price : price
    }])
    })
}

function addproduct(){
  
    var div = document.getElementById('product');
   if (div.style.display === "none") {
    div.style.display = "block";
   }
   else{
    div.style.display = "none"
   }
}

const addproduct1 = ()=>{
 axios.post("http://localhost:3001/iteam", {
    iteam,
 }).then((result)=>{
     setiteam1([iteam1]);
     if (result){
        
        alert("iteam already exist")
    
}

 })
 
   
 
}
useEffect(()=>{
axios.post("http://localhost:3001/iteams").then((result)=>{
    setdata2(result.data);
})
}, [])

console.log(data);
    return (
        <>
            <Backbutton />
           <center>
           <div className='product'>
           <button onClick={addproduct}>add product</button>
           <div id="product" style={{display : "none"}}>
           <label>inter iteam name</label><br/>
           <input onChange={(e=>{setiteam(e.target.value)})} />
           <button onClick={addproduct1}>add</button>
           </div>
           </div></center>

          <center><div  className='coint'>
            <label>invoice no <input onChange={(e)=>{setinvoice(e.target.value)}} /></label>
            <label> iteam</label><br/>
            <select onChange={(e)=>{setvalue(e.target.value)}} >{data2.map(data1=>{
                return (
                <>

                <option>{data1.iteam}</option>
                 
                    </>
                )
            })}</select><br/>
            <label>setQuentity</label><br/>
            <input onChange={(e=>{setquentity(e.target.value)})} /><br/>
            <label>rate</label><br/>
            <input onChange={(e=>{setprice(e.target.value)})} /><br/>
            <label>total</label><br/>
            <input value={price*quentity} />
            <button onClick={dbinsert}>submit</button>
           </div></center> 
      
        </>
    )
}

export default Purchase;