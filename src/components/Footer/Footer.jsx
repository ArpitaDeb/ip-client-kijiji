import React from "react"
import footermobile from "../../assets/image/footer-mobile.png"
import footertablet from "../../assets/image/footer-tablet.png"
import footerdesktop from "../../assets/image/footer-desktop.png"

import "./Footer.scss";

function Footer() {
  return (
    <header className="footer">
      <div className="footer__container">
        <img className="footer__image-mobile" src={footermobile} alt="footer"></img>
        <img className="footer__image-tablet" src={footertablet} alt="footer"></img>
        <img className="footer__image-desktop" src={footerdesktop} alt="footer"></img>
      </div>
    </header>
  );
}

export default Footer;