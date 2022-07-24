import React from 'react'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
function Backbutton() {

   let nav = useNavigate();

  function drbhadha (){
   nav(-1)
  }

  return (
    <>
    <button style={{marginLeft:"15px"}} onClick={drbhadha}>back </button>
    </>
  )
}

export default memo(Backbutton)