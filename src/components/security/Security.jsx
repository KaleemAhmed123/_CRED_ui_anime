import React from "react";
import Button from "../button/Button";
import "./style.css";

const FeelSpecial = () => {
  return (
    <div className="cred-security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
              security first. and second.
            </div>
            <div className="photo-section-subheading">
              what’s yours remains only yours.
            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what’s yours remains only yours. there’s
              no room for mistakes because we didn’t leave any.
            </div>
            <div className="photo-section-button">
              <Button text="Become a member" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
