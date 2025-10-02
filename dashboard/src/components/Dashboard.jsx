import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Menu from "./Menu";
import { GeneralContextProvider } from "./GeneralContext";
import { PortfolioProvider } from "./PortfolioContext";
import { useUser } from "./UserContext"; 

const Dashboard = () => {
  const { loading } = useUser(); 
  
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }
  
  return (
    <PortfolioProvider>
      <GeneralContextProvider>
        <div className="dashboard-container">
          <Menu /> 
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
          <ToastContainer />
        </div>
      </GeneralContextProvider>
    </PortfolioProvider>
  );
};

export default Dashboard;