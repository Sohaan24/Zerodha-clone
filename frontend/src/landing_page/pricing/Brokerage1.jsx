import React from 'react';

function Brokerage1() {
    return (
        <div className='container p-5 mb-5'>
            <h4 className='text-start'>Demat AMC (Annual Maintenance Charge)</h4>


            <table className="table text-start table-striped my-2" style={{ border: "1px solid #C8C8C8" }}>
        <thead>
          <tr>
            <th scope="col">Value of holdings</th>
            <th scope="col">AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">Up to ₹4 lakh</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td scope="row">₹4 lakh - ₹10 lakh</td>
            <td>₹ 100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td scope="row">Above ₹10 lakh</td>
            <td>₹ 300 per year, charged quartlerly</td>
          </tr>
          
        </tbody>
      </table>
      <p style={{fontSize : "13px"}} className='mb-5'> 
        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="#" style={{ color: "#1984d7" }}>click here</a>.
       </p>

       <h5 className='text-start'>Disclaimer</h5>
      <p className="text-muted" style={{ fontSize: "12px" }}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients
       who opt to receive physical contract notes will be charged ₹20 per contract note plus courier
        charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory
         and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised,
          and assigned options contracts. Free investments are available only for our retail individual clients.
           Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage.
            A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens.
             For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
    ) 
}
export default Brokerage1;