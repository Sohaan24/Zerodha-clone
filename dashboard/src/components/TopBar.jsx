import React from "react";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">19,500.20</p>
          <p className="percent down">-0.35%</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">65,200.45</p>
          <p className="percent up">+0.22%</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
