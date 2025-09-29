import React from "react";

function Brokerage() {
  return (
    <div className="container my-5 p-5">
      <table
        className="table table-striped"
        style={{ border: "1px solid #C8C8C8" }}
      >
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Equity delivery</th>
            <th scope="col">Equity intraday</th>
            <th scope="col">F&O - Futures</th>
            <th scope="col">F&O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" className="text-muted">
              Brokerage
            </td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td scope="row" className="text-muted">
              STT/CTT
            </td>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on the sell side</td>
            <td>
              0.125% of the intrinsic value on options that are bought and
              exercised
            </td>
          </tr>
          <tr>
            <td scope="row" className="text-muted">
              Transaction charges
            </td>
            <td>
              NSE: 0.00297% <br></br>
              BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00297% <br></br>
              BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00173% <br></br>
              BSE: 0
            </td>
            <td>
              NSE: 0.03503% on premium <br></br>
              BSE: 0.0325% on premium
            </td>
          </tr>
          <tr>
            <td scope="row" className="text-muted">
              GST
            </td>
            <td>18% on brokerage + SEBI charges + transaction charges</td>
            <td>18% on brokerage + SEBI charges + transaction charges</td>
            <td>18% on brokerage + SEBI charges + transaction charges</td>
            <td>18% on brokerage + SEBI charges + transaction charges</td>
          </tr>
          <tr>
            <td scope="row" className="text-muted">
              SEBI charges
            </td>
            <td>&#8377;10 / crore</td>
            <td>&#8377;10 / crore</td>
            <td>&#8377;10 / crore</td>
            <td>&#8377;10 / crore</td>
          </tr>
          <tr>
            <td scope="row" className="text-muted">
              Stamp charges
            </td>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <p className="fs-5">
        <a href="#" style={{ color: "#1984d7" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
      <br></br>
      <br></br>
      <h2 className="text-start">Charges for account opening</h2>


      <table className="table text-start table-striped my-2" style={{ border: "1px solid #C8C8C8" }}>
        <thead>
          <tr>
            <th scope="col">Type of account</th>
            <th scope="col">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">Online account</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td scope="row">Offline account</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td scope="row">NRI account offline only</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td scope="row">
              Partnership, LLP, HUF, or Corporate accounts offline only
            </td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Brokerage;
