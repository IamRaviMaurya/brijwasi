import React, { useRef } from "react";
import logo from "../../Assets/radha-krishna.png";
import cart_icon from "../../Assets/cart-icon.png";
import nav_menu from "../../Assets/nav-menu.png";
import './NavBar.css'

const NavBar = () => {
  const menuRef = useRef();
  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Brijwasi</p>
      </div>
      <img
        onClick={dropdownToggle}
        src={nav_menu}
        alt=""
        className="nav-dropdown"
      />
      <ul ref={menuRef} className="nav-menu">
        <li>Home</li>
        <li>Sweets</li>
        <li>Namkeens</li>
        <li>Snacks</li>
        <li>Drinks</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <div className="cart-container">
          <img src={cart_icon} alt="Cart" />
          <span className="cart-count">{0}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
