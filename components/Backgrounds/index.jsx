import React from "react";
import "./Backgrounds.css";

function Backgrounds(props) {
  const { className } = props;

  return (
    <div className={`backgrounds ${className || ""}`}>
      <div className="menu-bg"></div>
      <div className="general-bg"></div>
    </div>
  );
}

export default Backgrounds;
