import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' ;
import './index.css'
import App from './App.jsx'
import HomePage from './landing_page/home/HomePage.jsx';
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/signup/Login.jsx";
import About from "./landing_page/about/About.jsx";
import PricinngPage from "./landing_page/pricing/PricinngPage.jsx";
import Products from "./landing_page/products/Products.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import { CookiesProvider } from "react-cookie";
createRoot(document.getElementById('root')).render(
  <CookiesProvider>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<HomePage/>}></Route>
      <Route path='/signup' element ={<Signup/>}></Route>
      <Route path='/login' element ={<Login/>}></Route>
      <Route path='/about' element ={<About/>}></Route>
      <Route path='/pricing' element ={<PricinngPage/>}></Route>
      <Route path='/products' element ={<Products/>}></Route>
      <Route path='/support' element ={<SupportPage/>}></Route>
      <Route path='*' element ={<NotFound/>}></Route>

    </Routes>
    <Footer/>
  </BrowserRouter>
  </CookiesProvider>
)
