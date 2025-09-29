
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";


const Home = () => {
  return (
    <div className="home-container">
      <TopBar />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
