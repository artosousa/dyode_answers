import "./navigation.scss";
import Burger from "../images/burger.svg";
import CartIcon from "../images/cart.svg";
import LogoFile from "../images/logo.png";
import React from "react";
import SearchIcon from "../images/Search.svg";
import UserIcon from "../images/user.svg";

export default function Navigation() {
  return (
    <>
      <nav className="global-nav">
        <div className="nav-child">
          <img
            className="burger-icon"
            src={Burger}
            title="Site Navigation"
            alt="Hamburger mobile menu icon"
          />
          <img
            className="logo"
            src={LogoFile}
            title="LOGO"
            alt="Global Website Navigation Logo"
          />
        </div>
        <div className="nav-child desktop-nav">
          <ul>
            <li>
              <a href="#mens">Men&apos;s</a>
            </li>
            <li>
              <a href="#women">Women&apos;s</a>
            </li>
            <li>
              <a href="#accessories">Accessories</a>
            </li>
            <li>
              <a href="#sale">Sale!</a>
            </li>
          </ul>
        </div>
        <div className="nav-child right">
          <img
            src={SearchIcon}
            title="Search Website"
            alt="magnifying glass icon"
          />
          <img src={UserIcon} title="Your Account" alt="user account icon" />
          <img src={CartIcon} title="Your Cart" alt="shopping cart icon" />
        </div>
      </nav>
    </>
  );
}
