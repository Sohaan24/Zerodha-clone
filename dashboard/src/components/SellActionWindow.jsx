import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { usePortfolio } from "./PortfolioContext";
import GeneralContext from "./GeneralContext";
import "./BnSActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { sellStock, getHoldingsByName } = usePortfolio();
  const generalContext = useContext(GeneralContext);

  // Get available quantity for this stock
  const availableHoldings = getHoldingsByName(uid);
  const availableQty = availableHoldings.reduce((total, holding) => total + holding.qty, 0);

  const handleSellClick = () => {
    if (stockQuantity > 0 && stockPrice > 0) {
      if (stockQuantity <= availableQty) {
        // Use portfolio context instead of API call
        sellStock({
          name: uid,
          qty: parseInt(stockQuantity),
          price: parseFloat(stockPrice),
          mode: "SELL"
        });
        
        generalContext.closeSellWindow();
      } else {
        alert(`You only have ${availableQty} shares available to sell`);
      }
    } else {
      alert("Please enter valid quantity and price");
    }
  };

  const handleCancelClick = ()=>{
    generalContext.closeSellWindow() ;
  };

  return (
      <div className="container" id="sell-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
               onChange={(e) => setStockQuantity(parseInt(e.target.value || 0))}
               value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(parseFloat(e.target.value || 0))}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>
  
        <div className="buttons">
          <div>
            <Link className="btn btn-red" onClick={handleSellClick}>
              Sell
            </Link>
            <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
  )
};

export default SellActionWindow;