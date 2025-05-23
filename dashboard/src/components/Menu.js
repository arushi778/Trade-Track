import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [setProfileDropdownOpen, setIsProfileDropdownOpen ] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };
  const handleProfileClick = (isProfileDropdownOpen) => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <Link to="/" onClick = {()=>handleMenuClick(0)}>
            <li>
              <p className={selectMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </li>
          </Link>
         <Link to="/orders" onClick = {()=>handleMenuClick(1)}>
            <li>
              <p className={selectMenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </li>
          </Link>
          <Link to="/holdings" onClick = {()=>handleMenuClick(2)}>
            <li>
              <p className={selectMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </li>
          </Link>
          <Link to="/positions" onClick = {()=>handleMenuClick(3)}>
            <li>
              <p className={selectMenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </li>
          </Link>
          <Link to="/funds" onClick = {()=>handleMenuClick(4)}>
            <li>
              <p className={selectMenu===4 ? activeMenuClass : menuClass}>Funds</p>
            </li>
          </Link>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
