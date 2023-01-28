import React from "react";
import logo from "../../images/logo.png";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="background">
      <div className="footer">
        <div className="footer__img">
          <img src={logo} alt="yoxdu" />
        </div>
        <div className="footer__links">
          <p>about</p>
          <p>faq</p>
          <p>products</p>
          <p>terms</p>
          <p>policy</p>
          <p>instagram</p>
          <p>twitter</p>
          <p>facebook</p>
          <p>pinterest</p>
          <p>blog</p>
        </div>
        <div className="footer__rg">
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <div className="footer__rg__input">
            <input type="text" placeholder="Your Email" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
