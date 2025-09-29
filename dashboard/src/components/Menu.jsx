import  { useState } from "react";

import { Link } from "react-router-dom";

const Menu = ({username}) => {
  const getInitial = (name)=>{
    if(!name) return "U";
    return name.split(' ').map(word=> word.charAt(0).toUpperCase()).join('').slice(0,2);

  }
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    console.log('Menu clicked:', index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  
  return (
    <div className="menu-container">
      <div className="logo-container">
        <img src="/logo.png" alt="Zerodha" className="logo" />
      </div>
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick(0)}
              className={selectedMenu === 0 ? activeMenuClass : menuClass}
            >
              <span className="menu-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => handleMenuClick(1)}
              className={selectedMenu === 1 ? activeMenuClass : menuClass}
            >
              <span className="menu-text">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => handleMenuClick(2)}
              className={selectedMenu === 2 ? activeMenuClass : menuClass}
            >
              <span className="menu-text">Holdings</span>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => handleMenuClick(3)}
              className={selectedMenu === 3 ? activeMenuClass : menuClass}
            >
              <span className="menu-text">Positions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => handleMenuClick(4)}
              className={selectedMenu === 4 ? activeMenuClass : menuClass}
            >
              <span className="menu-text">Funds</span>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => handleMenuClick(6)}
              className={selectedMenu === 6 ? activeMenuClass : menuClass}
            >
              <span className="menu-text">Apps</span>
            </Link>
          </li>
        </ul>
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{getInitial(username)}</div>
          <div className="profile-info">
            <p className="username">{username || "USERID"}</p>
            <p className="account-type">Individual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
