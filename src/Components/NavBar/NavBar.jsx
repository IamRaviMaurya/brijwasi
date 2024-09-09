import React from "react";
import logo from "../../Assets/radha-krishna.png";
import cart_icon from "../../Assets/cart-icon.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" className="navbar-checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li>Home</li>
            <li>Sweet</li>
            <li>Namkeen</li>
            <li>Snacks</li>
            <li>Drinks</li>
            <li>Contact</li>
          </ul>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Brijwasi</p>
          </div>
          <div className="nav-login-cart">
            {/* <button>Login</button> */}
            <div className="cart-container">
              <img src={cart_icon} alt="Cart" />
              <span className="cart-count">{0}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
