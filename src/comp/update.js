import React, { useEffect, useState } from 'react'
import Backbutton from '../Backbutton'
import axios from 'axios'
import { useParams,  } from 'react-router-dom'


function Update() {
  const params = useParams()
  console.log(params)

  const [data, setdata] = useState([])



  async function getproduct() {
   await axios.post(`http://localhost:3001/product/${params.name}`).then((result) => {
      setdata(result.data)
    })

  }

  useEffect(() => {
    getproduct()
  }, [])
  console.log(data)

  return (
    <>
      <Backbutton />
      <center>
      <div>
        <h3> account information for {params.name}</h3>
        
      </div></center>
      

    </>
  )
}

export default Update