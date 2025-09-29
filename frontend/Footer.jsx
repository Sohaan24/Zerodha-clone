function Footer() {
  return (
    <footer>
      <div className="footer-main-info p-4">
        <div className="social-links">
          <a href="/">
            <img
              src="/media/logo.svg"
              alt="logo"
              style={{ width: "25%" }}
            ></img>
          </a>
          <p>
            &copy; 2010-2015, Zerodha Broking Ltd.
            <br />
            All rights reserved
          </p>
          <p>
            <i className="fa-brands fa-facebook extra-links"></i>
            <i className="fa-brands fa-instagram extra-links"></i>
            <i className="fa-brands fa-linkedin extra-links"></i>
            <i className="fa-brands fa-whatsapp extra-links"></i>
          </p>
        </div>
        <div className="accounts text-muted">
          <h5>Accounts</h5>
          <ul>
            <li className="extra-links">Open demat account</li>
            <li className="extra-links">Minor demat account</li>
            <li className="extra-links">NRI demat account</li>
            <li className="extra-links">Commodity</li>
            <li className="extra-links">Fund transfer</li>
            <li className="extra-links">MTF</li>
          </ul>
        </div>
        <div className="support text-muted">
          <h5>Support</h5>
          <ul>
            <li className="extra-links">Contact us</li>
            <li className="extra-links">Support portal</li>
            <li className="extra-links">How to file a complaint</li>
            <li className="extra-links">Status of your complaints</li>
            <li className="extra-links">Cirular</li>
          </ul>
        </div>
        <div className="quick-links text-muted">
          <h5>Quick Links</h5>
          <ul>
            <li className="extra-links">Upcoming IPOs</li>
            <li className="extra-links">Brokerage charges</li>
            <li className="extra-links">Market holidays</li>
            <li className="extra-links">Economic calendar</li>
            <li className="extra-links">Markets</li>
          </ul>
        </div>
      </div>

      <div className="extra-info text-muted text-start">
        <p>
          Zerodha Broking Ltd.: Member of NSE, SEBI Registration no.:
          INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
          Ltd. SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 SEBI Registration
          no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
          4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <br />
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.\
        </p>
        <br />
        <p>
          Attention investors: 1. Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2. Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3.
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <br />
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
