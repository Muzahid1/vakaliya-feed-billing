import React, {Suspense, lazy} from 'react';
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
import Acleader from './comp/acleader'
import Update from './comp/acinfo';
import Stoke from './comp/stoke';
import About from './comp/about';
import { Provider } from "react-redux"
import App from './App';

// const Acleader = lazy(()=>import('./comp/acleader'))
function Apps (){



  return(

<>
<App/>
</>

  );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps/>)






