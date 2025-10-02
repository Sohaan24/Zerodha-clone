import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import SellActionWindow from "./SellActionWindow";
import Menu from "./Menu";
import GeneralContext,{ GeneralContextProvider } from "./GeneralContext";
import { PortfolioProvider } from "./PortfolioContext";


const Dashboard = () => {
  const location = useLocation();
  const [cookies, , removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState("");
  const generalContext = useContext(GeneralContext);
  const { isSellWindowOpen, selectedStockUID } = generalContext || { isSellWindowOpen: false, selectedStockUID: "" };
  const [loading, setLoading] = useState(true);
  
  console.log('Current location:', location.pathname);
  const apiUrl = import.meta.env.VITE_API_URL;
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL;
  useEffect(() => {
    const verifyCookie = async () => {
      if (cookies.token) {
        try {
          const { data } = await axios.get(
            `${apiUrl}/verify-user`,
            { 
              withCredentials: true,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }
          );
          
          if (data.status && data.user) {
            setUsername(data.user);
            localStorage.setItem('username', data.user);
          }
        } catch (error) {
          const storedUsername = localStorage.getItem('username');
          if (storedUsername) {
            setUsername(storedUsername);
          }
        } finally {
          setLoading(false); 
        }
      }else {
        setLoading(false); 
      }
    };
    verifyCookie();
  }, [cookies.token, apiUrl]);

  const Logout = async () => {
  try {
    await axios.get(`${apiUrl}/logout`, { withCredentials: true });
    removeCookie("token");
    localStorage.removeItem('username');
     window.location.href = `${frontendUrl}/login`;
  } catch (error) {
    console.error("Logout failed:", error);
    
    removeCookie("token");
     localStorage.removeItem('username');
    window.location.href = `${frontendUrl}/login`;
  }
};
  if (loading) {
    return <div>Loading...</div>; 
  }
  return (
    <PortfolioProvider>
     <GeneralContextProvider>
    <div className="dashboard-container">
      <Menu username={username} onLogout = {Logout} />
      
      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="summary" element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </div>
     
        <WatchList />
      
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
      <ToastContainer/>
    </div>
    </GeneralContextProvider>
    </PortfolioProvider>
  );
};

export default Dashboard;
