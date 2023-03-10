import React, { useState } from "react";
import "./style.css";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      {/* wrapper when in mob nav opens */}
      <div
        className={`mobile-menu only-mobile ${showMobileMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">credit score check</div>
          <div className="mobile-nav-item">credit card bill payment</div>
        </div>
      </div>
      {/*  */}
      <div className="max-width flex header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          className="header-logo"
        />
        {/* nav button for mobile */}
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            className={`hamburger hamburger--spin ${
              showMobileMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={() => toggleMobileMenu()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        {/*  */}
        <div className="non-mobile flex">
          <div className="header-nav-item">credit score check</div>
          <div className="header-nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
