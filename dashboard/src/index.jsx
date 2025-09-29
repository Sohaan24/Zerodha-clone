import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
