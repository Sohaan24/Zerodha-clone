import { Link } from "react-router-dom";
import { usePortfolio } from "./PortfolioContext";

const Orders = () => {
  const { portfolioOrders } = usePortfolio();
  
  return (
    <div className="orders">
      <h3 className="title">Orders ({portfolioOrders.length})</h3>
      
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Instrument</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Status</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {portfolioOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.instrument}</td>
                <td>
                  <span className={`order-type ${order.type.toLowerCase()}`}>
                    {order.type}
                  </span>
                </td>
                <td>{order.qty}</td>
                <td>₹{order.price.toFixed(2)}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.time}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
