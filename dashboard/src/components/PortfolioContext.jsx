import React, { createContext, useContext, useState, useEffect } from 'react';
import { holdings, positions, orders } from '../data/data';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  
  const [portfolioHoldings, setPortfolioHoldings] = useState(holdings);
  const [portfolioPositions, setPortfolioPositions] = useState(positions);
  const [portfolioOrders, setPortfolioOrders] = useState(orders);

 
  const generateOrderId = () => {
    const timestamp = Date.now();
    return `ORD${timestamp}`;
  };

  // Add new order
  const addOrder = (orderData) => {
    const newOrder = {
      id: generateOrderId(),
      instrument: orderData.name,
      type: orderData.mode,
      qty: orderData.qty,
      price: orderData.price,
      status: "COMPLETE",
      time: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }),
      date: new Date().toLocaleDateString('en-CA')
    };
    
    setPortfolioOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  // Buy stock logic
  const buyStock = (stockData) => {
    const { name, qty, price } = stockData;
    
    // Add to orders
    const order = addOrder({
      name,
      qty,
      price,
      mode: "BUY"
    });

    
    const newHolding = {
      name,
      qty,
      avg: price,
      price: price,
      net: "+0.00%",
      day: "+0.00%",
      isLoss: false
    };
    
    setPortfolioHoldings(prev => [newHolding, ...prev]);

    return order;
  };

  // Sell stock logic
  const sellStock = (stockData) => {
    const { name, qty, price } = stockData;
    
    // Add to orders
    const order = addOrder({
      name,
      qty,
      price,
      mode: "SELL"
    });

    
    const stockHoldings = portfolioHoldings.filter(holding => holding.name === name);
    let remainingQtyToSell = qty;

    if (stockHoldings.length > 0) {
      setPortfolioHoldings(prev => {
        const updated = [...prev];
        let qtyLeftToSell = remainingQtyToSell;
        
        
        for (let i = 0; i < updated.length && qtyLeftToSell > 0; i++) {
          if (updated[i].name === name) {
            const holding = updated[i];
            
            if (holding.qty <= qtyLeftToSell) {
             
              qtyLeftToSell -= holding.qty;
              updated.splice(i, 1);
              i--; 
            } else {
             
              updated[i] = {
                ...holding,
                qty: holding.qty - qtyLeftToSell,
                price: price, 
                isLoss: price < holding.avg
              };
              qtyLeftToSell = 0;
            }
          }
        }
        
        return updated;
      });
    }

    return order;
  };

  // Get holdings by name (for multiple stocks with same name)
  const getHoldingsByName = (name) => {
    return portfolioHoldings.filter(holding => holding.name === name);
  };

  // Get total holdings value
  const getTotalHoldingsValue = () => {
    return portfolioHoldings.reduce((total, holding) => {
      return total + (holding.price * holding.qty);
    }, 0);
  };

  // Get total investment
  const getTotalInvestment = () => {
    return portfolioHoldings.reduce((total, holding) => {
      return total + (holding.avg * holding.qty);
    }, 0);
  };

  // Get total P&L
  const getTotalPnL = () => {
    const totalValue = getTotalHoldingsValue();
    const totalInvestment = getTotalInvestment();
    return totalValue - totalInvestment;
  };

  const value = {
    portfolioHoldings,
    portfolioPositions,
    portfolioOrders,
    buyStock,
    sellStock,
    addOrder,
    getHoldingsByName,
    getTotalHoldingsValue,
    getTotalInvestment,
    getTotalPnL
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export default PortfolioContext;
