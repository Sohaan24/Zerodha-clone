import React from "react";

const IsLoading = () => {
 
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backdropFilter: "blur(4px)", 
  };

  const spinnerStyle = {
    border: "6px solid #f3f3f3", 
    borderTop: "6px solid #1984d7", 
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 1.2s linear infinite",
  };
  
  const textStyle = {
    marginTop: "20px",
    color: "#333",
    fontSize: "1.2rem",
    fontWeight: "500",
  };

  return (
    <div style={overlayStyle}>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyle}></div>
      <p style={textStyle}>Loading Your Dashboard...</p>
    </div>
  );
};

export default IsLoading;
