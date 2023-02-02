import React, { useEffect, useState } from 'react'
import Backbutton from '../Backbutton'
import axios from 'axios'
import { useParams,  } from 'react-router-dom'


function Update() {
  const params = useParams()
  // console.log(params)

  const [data, setdata] = useState([])
  const [user, setuser] = useState([])


  async function getproduct() {
   await axios.post(`http://localhost:3001/product/${params.name}`).then((result) => {
      setdata(result.data)
    })

  }

//  useEffect(()=>{
//   axios.post(`http://localhost:3001/invoice`).then((result1)=>{
//     setuser(result1.data)
   
//   },)
//  },[])
 
  useEffect(() => {
    getproduct()
  }, [])
  // console.log(data)
  

  return (
    <>
      <Backbutton />
      <center>
      <div>
        <h3> account information for {params.name}</h3>
       
      </div></center>
      <div> <h3> name: {data[0]?.name} {data[0]?.lname}</h3>
      <h3>address: { data[0]?.businessarea  }{data[0]?.palace} {data[0]?.start}</h3>
      <h3>contact detail: {data[0]?.mobile} {data[0]?.email}</h3>
      </div>

    </>
  )
}

export default Update