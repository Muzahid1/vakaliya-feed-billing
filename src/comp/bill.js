import { render } from "@testing-library/react";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from 'react-dom/client';
import Home from "../home";
import Backbutton from "../Backbutton";
import  { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';



import { useNavigate } from "react-router-dom";
import Invoice from "./Invoice";
import e from "cors";
const Contact = () => {

  const [data, setData] = useState([{ name: "select" }]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [Row, newRow] = useState(["1"]);
  const [iteam, setIteam] = useState("phase 1");
  const [price, setprice] = useState("1115");
  const [Quentity, setQuentity] = useState("1");
 const [name, setname] = useState("")
  const [shipping, setshipping] = useState("0")
  const [total, settotal] = useState(`${price*Quentity-shipping}`);
  const [dbdata, setdbdata] = useState();
  const [date, setDate] = useState(``);
  const [dbdata1, setdbdata1] = useState()
  const [stoke, setstoke] = useState([])


  const componentRef = useRef();
  const handlePrint =  useReactToPrint({
    content: () => componentRef.current,
  
 
   
  }
  );


  //const history = useNavigate();
  // function user() {
    useEffect(()=>{
    axios.get("http://localhost:3001/user").then((result) => {
      setData(result.data);
    });
  },[])
  // }
  useEffect(()=>{
    axios.post(`http://localhost:3001/iteams/${iteam}`).then((result1)=>{
      setstoke(  result1.data  )
    })
    
  }, [])

  function app() {
    // console.log(data1);
    
   const apps = axios.post(`http://localhost:3001/suser/${data1}`).then((result1) => {
      setData2(result1.data)
     
      
    });

  };
  
  // if (Quentity <= stoke[0]?.quentity){
        
  // }else {alert(iteam + " is out of stoke")}
   

  function dbinsert1 (){
    if (Quentity <= stoke[0].quentity){
    {
  
    axios.post("http://localhost:3001/invoice", {
    name : data2[0].name,
    iteam,
    price,
    Quentity,
    total,
    date,
    shipping
  }).then(()=>{
    setdbdata([dbdata, {
      name : data2[0].name,  
      iteam,
      price,
      Quentity,
      total,
      date,
      shipping
   } ])
  })}

}else{alert(iteam +" out of stoke")}
  

  axios.put("http://localhost:3001/acleader", {
   name : "name"
  }).then(()=>{
    setdbdata1([dbdata1, {
    name : data2[0].name
  }])
})
}



//   const printdiv = (parava) => {
//     console.log("printing");
//     //  var backup = document.getElementById("root").innerHTML;
//     var divcontent = document.getElementById(parava).innerHTML;
//     // document.body.innerHTML =  divcontent;
//     window.print();
//     // setIsprint("false");
//     //  document.body.innerHTML = backup;
// dbinsert()
//   }
  function handlePrint1 (){
    handlePrint()
    dbinsert1()
  }
  
//  stoke.map(stoke=>{
//   var iteam1 = iteam == stoke[iteam].iteam
//   console.log(iteam1.quentity)
// });
console.log(stoke[0]?.quentity)

  return (

    <div id="root1">
      <>
        <Backbutton />
        <center> <select onClick={app} onChange={(e) => setData1(e.target.value)}>{data.map((data,index) => {
          return (
            <>

              <option key={index}>{data.name}</option>
            </>
          )
        })}</select>
        </center>


        <div ref={componentRef} id="billform" className="billform">
          <center><h2>vakaliya feed</h2>
            <h5>authorized distributer of godrej agrovet </h5>
            <h5>nh 27 near chandrapur star plaza  </h5>
          </center>




          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="invoice-title">
                  <h2>Invoice</h2>
                  <h3 className="pull-right">Order # 12345</h3>
                </div>

                <div className="row">

                  <div className="col-xs-6">
                    <address> <strong>Billed To:</strong></address>
                    
                       
                        
                          <div><p  >{data2[0]?.name}</p> </div>
                          {data2[0]?.businessarea} {data2[0]?.start} {data2[0]?.zip}<br />
                          {data2[0]?.mobile}, {data2[0]?.email}
                        
                      
                    
                  </div>

                </div>
                <div className="row">

                  <div className="col-xs-6 text-right">
                    <address>
                      <strong>Order Date:</strong>
                      <br />

                      <input value={date} onChange={(e)=>{setDate(e.target.value)}} type="date"></input>

                      <br />
                      <br />
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>Order summary</strong>
                    </h3>
                  </div>
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table className="table table-condensed">
                        <thead>
                          <tr>
                            <td>
                              <strong >Item</strong>
                            </td>
                            <td className="text-center">
                              <strong>Price</strong>
                            </td>
                            <td className="text-center">
                              <strong>Quantity</strong>
                            </td>
                            <td className="text-right">
                              <strong>Totals</strong>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          {/* foreach ($order->lineItems as $line) or some such thing here */}
                          <tr>
                            <td><input onChange={(e) => { setIteam(e.target.value) }} value={iteam} /></td>
                            <td className="text-center"><input onChange={(e) => { setprice(e.target.value) }} value={price}></input></td>
                            <td className="text-center"><input onChange={(e) => { setQuentity(e.target.value) }} value={Quentity}></input></td>
                            <td className="text-right"> {price * Quentity}</td>
                          </tr>
                          <tr>
                            <td className="thick-line" />
                            <td className="thick-line" />
                            <td className="thick-line text-center">
                              <strong>Subtotal</strong>
                            </td>
                            <td className="thick-line text-right">{price * Quentity}</td>
                          </tr>
                          <tr>
                            <td className="no-line" />
                            <td className="no-line" />
                            <td className="no-line text-center">
                              <strong>Shipping</strong>
                            </td>
                            <td className="no-line text-right"><input onChange={(e) => { setshipping(e.target.value) }}></input></td>
                          </tr>
                          <tr>
                            <td className="no-line" />
                            <td className="no-line" />
                            <td className="no-line text-center">
                              <strong>Total</strong>
                            </td>
                            <td className="no-line text-right">{price * Quentity - shipping}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>





        </div>
        <center> <button onClick={handlePrint1} > save and print</button></center>
        <center> <button onClick={dbinsert1} > save </button></center>
        {/* <center> <button onClick={data22} > load </button></center> */}


      </>
    </div>
  )

}
export default Contact;