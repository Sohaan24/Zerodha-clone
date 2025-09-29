
const Summary = () => {
  return (
    <div className="summary-container">
      <div className="summary-header">
        <h2>Dashboard</h2>
      </div>

      <div className="summary-card">
        <div className="summary-card-header">
          <h3>Equity</h3>
        </div>

        <div className="summary-data">
          <div className="summary-item">
            <p className="summary-label">Margin available</p>
            <h3 className="summary-value">₹3.74k</h3>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-item">
            <p className="summary-label">Margins used</p>
            <p className="summary-value">₹0</p>
          </div>
          <div className="summary-item">
            <p className="summary-label">Opening balance</p>
            <p className="summary-value">₹3.74k</p>
          </div>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-card-header">
          <h3>Holdings (13)</h3>
        </div>

        <div className="summary-data">
          <div className="summary-item">
            <p className="summary-label">P&L</p>
            <h3 className="summary-value profit">₹1.55k <small>+5.20%</small></h3>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-item">
            <p className="summary-label">Current Value</p>
            <p className="summary-value">₹31.43k</p>
          </div>
          <div className="summary-item">
            <p className="summary-label">Investment</p>
            <p className="summary-value">₹29.88k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
