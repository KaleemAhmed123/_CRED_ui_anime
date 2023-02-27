import React from "react";
import Button from "../button/Button";
import "./style.css";

const getIosPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="app-rating-icon"
    />
  );
};

const getAndroidPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="app-rating-icon"
    />
  );
};
const AppRating = () => {
  return (
    <div className="app-rating max-width flex">
      {/* L */}
      <div className="app-rating-block flex flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            pref={getIosPrefix()}
            text="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      {/* R */}
      <div className="app-rating-block flex flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            pref={getAndroidPrefix()}
            text="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button text="Download the app" />
      </div>
    </div>
  );
};

export default AppRating;
