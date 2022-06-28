import "./newsletter.scss";
import MailImg from "../images/mail.svg";
import PropTypes from "prop-types";
import React from "react";

const NewsLetter = (props) => {
  const { data } = props;

  return (
    <section className="newsletter ">
      <div className="container">
        <div className="newsletter-title">
          <img
            src={MailImg}
            className="mail-icon"
            title="Sign Up"
            alt="envelope icon"
          />
          <h1>{data.header}</h1>
        </div>
        <div className="newsletter-content">
          <div className="newsletter-copy">
            <p>{data.sub}</p>
          </div>
          <div className="newsletter-form">
            <form>
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email Address"
                name="email"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

NewsLetter.propTypes = {
  data: PropTypes.object,
};

export default NewsLetter;
