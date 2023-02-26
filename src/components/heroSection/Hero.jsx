import React from "react";
import Button from "../button/Button";
import "./style.css";

const Hero = () => {
  return (
    <div className="section-wrapper">
      <div className="flex center claim-label">
        <div>pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className="claim-anchor">
          claim now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
          />
        </div>
      </div>

      <div className="flex flex-col section max-width">
        <div className="heading">rewards for paying credit card bills.</div>
        <div className="subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button text="Download CRED" />
      </div>
    </div>
  );
};

export default Hero;
