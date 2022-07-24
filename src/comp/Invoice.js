import { render } from '@testing-library/react';
import React, { memo } from 'react'
import ReactToPrint from "react-to-print";
import Backbutton from '../Backbutton';
 function Invoice(props) {

   console.log(props);
   const {data2, Row, iteam, price, Quentity, setQuentity} = props;
   console.log(data2);



  
    return (
        <>
        <Backbutton/>
       
        </>
    )
}
export default memo(Invoice);