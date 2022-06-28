import "./footer.scss";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import React, { useState } from "react";
import Twitter from "../images/twitter.svg";

const Footer = () => {
  const [showAccessories, setShowAccessories] = useState(false);
  const [showCompany, setshowCompany] = useState(false);
  const expandAccessories = () => {
    setShowAccessories((prevToggled) => !prevToggled);
  };
  const expandCompany = () => {
    setshowCompany((prevToggled) => !prevToggled);
  };
  return (
    <footer>
      <div className="container">
        <div className="footer-nav">
          <div className="left-links">
            <div className="customer-service link-list">
              <div className="list-title" onClick={expandAccessories}>
                <h3>Customer Service</h3>
                <span className="expand-url">
                  {showAccessories ? `-` : `+`}
                </span>
              </div>
              <ul className={showAccessories ? `show` : `hide`}>
                <li>
                  <a href="https://arthursousa.com" title="Accessibility">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="https://arthursousa.com" title="Contact Us">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://arthursousa.com" title="Return Policy">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="https://arthursousa.com" title="FAQ">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="https://arthursousa.com" title="Gift Certificates">
                    Gift Certificates
                  </a>
                </li>
                <li>
                  <a href="https://arthursousa.com" title="Wishlist">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
            <div className="company link-list">
              <div className="list-title" onClick={expandCompany}>
                <h3>Company</h3>
                <span className="expand-url">{showCompany ? `-` : `+`}</span>
              </div>
              <ul className={showCompany ? `show` : `hide`}>
                <li>
                  <a href="https://arthursousa.com" title="About Us">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://arthursousa.com" title="Careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://arthursousa.com" title="Press">
                    Press
                  </a>
                </li>
                <li>
                  <a href="https://arthursousa.com" title="Affiliates">
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-links">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <img
                  src={Facebook}
                  alt="facebook icon"
                  title="Follow us on Facebook"
                />
              </li>
              <li>
                <img
                  src={Instagram}
                  alt="instagram icon"
                  title="Follow us on Instagram"
                />
              </li>
              <li>
                <img
                  src={Twitter}
                  alt="twitter icon"
                  title="Follow us on Twitter"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
