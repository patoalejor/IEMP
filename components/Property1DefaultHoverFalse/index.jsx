import React from "react";
import { Link } from "react-router-dom";
import "./Property1DefaultHoverFalse.css";

function Property1DefaultHoverFalse(props) {
  const { className } = props;

  return (
    <div className={`button-login ${className || ""}`}>
      <div className="log-in-1 x24pt---bold---monserrat">Log in</div>
    </div>
  );
}

export default Property1DefaultHoverFalse;
