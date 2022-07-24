import React, { useEffect, useState } from 'react'
import Backbutton from '../Backbutton'
import axios from 'axios'
import { useParams,  } from 'react-router-dom'


function Update() {
  const params = useParams()
  console.log(params)

  const [data, setdata] = useState([])



  function getproduct() {
    axios.post(`http://localhost:3001/product/${params.name}`).then((result) => {
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



    </>
  )
}

export default Update