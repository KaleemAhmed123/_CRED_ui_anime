import React from "react";
import "./style.css";

const Button = ({ text, onClick, customClass, pref }) => {
  return (
    <div className={`flex center wrapper ${customClass}`} onClick={onClick}>
      {pref} {text}
    </div>
  );
};

export default Button;
