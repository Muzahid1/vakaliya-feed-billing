import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import Navbar from './comp/Navbar';
import Home from './home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './comp/error';
import Contact from './comp/bill';
import Register from './comp/register';
import Login from './comp/login';
import Footer from './comp/footer';
import Vrfylogin from './comp/Vrfylogin';
import Purchase from './comp/Purchase';
import Acleader from './comp/acleader';
import Update from './comp/update';
import Stoke from './comp/stoke';
import About from './comp/about';
function Apps (){
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route element={<Vrfylogin/>} >
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/update/:name' element={<Update/>} ></Route>
        <Route path='/Contact' element={<Contact/>} ></Route>
        <Route path='/purchase' element={<Purchase/>}></Route>
        <Route path="/acleader" element={<Acleader/>}></Route>
        <Route path='*' element={<Error/>} ></Route>
        <Route path='/stoke' element={<Stoke/>} ></Route>
        </Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/About' element={<About/>} ></Route>
       
        
      </Routes>
      <Footer/>
      <Routes>
       
      </Routes>
      </BrowserRouter>
  );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

