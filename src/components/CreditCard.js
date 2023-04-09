import React from "react";
import "./CreditCard.css";
import masterCardLogo from "../assets/images/logo.png";
import chipImage from "../assets/images/chip.png";

const CreditCard = (props) => {
  return (
    <div className="container">
      <div className="card front-face">
        <div className="top-side">
          <span className="logo">
            <img src={masterCardLogo} alt="mastercard" />
            <h5>Master Card</h5>
          </span>
          <img src={chipImage} alt="chip" className="chipImage" />
        </div>

        <div className="card-details">
          <div className="name-number">
            <h6>Card Number</h6>
            <h5 className="number">8050 8050 8050 8050</h5>
            <h5 className="name">Umut Yenidil</h5>
          </div>

          <div className="valid-date">
            <h6>Valid Thru</h6>
            <h5>05/28</h5>
          </div>
        </div>
      </div>
      <div className="card back-face">
        <h6>
          For customer service call +850 444 0 444 or email at
          garanti@mastercard.com
        </h6>

        <span className="magnetic-strip"></span>
        <div className="signature">
          <i>005</i>
        </div>
        <h5>
          In ullamco id cupidatat nulla ex officia consequat consectetur. Do
          veniam id duis commodo nulla laboris quis amet tempor In ullamco id
          cupidatat nulla ex officia consequat consectetur. Do veniam id duis
          commodo nulla laboris quis amet tempor
        </h5>
      </div>
    </div>
  );
};

export default CreditCard;
