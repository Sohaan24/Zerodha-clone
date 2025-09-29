import {Link} from "react-router-dom" ;
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid p-1">
        <Link className="navbar-brand" to="/">
          <img src="/media/logo.svg" alt="logo" style={{ width: "25%" }}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-muted" aria-current="page" to="/signup" style={{fontWeight : "400"}}>
                  Signup
                </Link>
              </li>
              <li className="nav-item text-muted">
                <Link className="nav-link" to="/about" style={{fontWeight : "400"}}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/products" style={{fontWeight : "400"}}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to = "/pricing"style={{fontWeight : "400"}}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item  text-muted">
                <Link className="nav-link" to ="/support" style={{fontWeight : "400"}}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
