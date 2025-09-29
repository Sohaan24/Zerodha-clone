import React from "react";
import { Link } from "react-router-dom";
import { fundsData } from "../data/data";

const Funds = () => {
  const { equity, commodity } = fundsData;
  
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <h4>Equity</h4>
          
          <div className="funds-summary">
            <div className="summary-item">
              <span>Available margin</span>
              <span className="highlight">₹{equity.availableMargin.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Used margin</span>
              <span>₹{equity.usedMargin.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Available cash</span>
              <span>₹{equity.availableCash.toFixed(2)}</span>
            </div>
          </div>

          <div className="funds-details">
            <div className="detail-row">
              <span>Opening Balance</span>
              <span>₹{equity.openingBalance.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Closing Balance</span>
              <span>₹{equity.closingBalance.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Payin</span>
              <span>₹{equity.payin.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>SPAN</span>
              <span>₹{equity.span.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Delivery margin</span>
              <span>₹{equity.deliveryMargin.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Exposure</span>
              <span>₹{equity.exposure.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Options premium</span>
              <span>₹{equity.optionsPremium.toFixed(2)}</span>
            </div>
          </div>

          <div className="collateral-section">
            <h5>Collateral</h5>
            <div className="detail-row">
              <span>Liquid funds</span>
              <span>₹{equity.collateralLiquid.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Equity</span>
              <span>₹{equity.collateralEquity.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Total Collateral</span>
              <span>₹{equity.totalCollateral.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <h4>Commodity</h4>
            <p>{commodity.message}</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
