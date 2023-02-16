import React from "react";
import "./Footer.css";
import D from "../../images/D.png";
import O from "../../images/O.png";
import N from "../../images/N.png";
import E from "../../images/E.png";
import input from "../../images/input.png";
import pay from "../../images/pay.png";
import bon from "../../images/bon.png";
function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={D} alt="" />
        <img src={O} alt="" />
        <img src={N} alt="" />
        <img src={E} alt="" />
      </div>
<img id="bon" src={bon} alt="" />

      <div className="links">
        <div className="L">
          <h4>Helpful Links</h4>
          <p>FAQ HELP CENTER</p>
          <p>CAP BACK</p>
          <p>SHIPPING POLICY</p>
          <p>RETURN POLICY</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS</p>
          <p>TERMS</p>
        </div>
        <div className="L">
          <h4>Community</h4>
          <p>REVIEWS</p>
          <p>PRESS</p>
          <p>INSTAGRAM</p>
          <p>TIKTOK</p>
          <p>FACEBOOK</p>
          <p>BECOME A RETAIL PARTNER</p>
          <p>BECOME AN AFFILIATE</p>
          <p>BECOME AN AMBASSADOR</p>
        </div>
        <div className="L">
          <h4>Contact Us</h4>
          <p>Ask us anything.</p>
          <p>info@helloeverist.com</p>
        </div>
        <div className="L">
            <h4>Join our eco-optimist community.</h4>
            <p id="long">You'll know about secret sales, new products before they launch, and occasionally we'll send you cat jokes.</p>
<img src={input} alt="" />
        </div>



      </div>

      <div className="pay">
<p>© 2023,Everist ..</p>
<img src={pay} alt="" />
</div>







    </footer>
  );
}

export default Footer;
