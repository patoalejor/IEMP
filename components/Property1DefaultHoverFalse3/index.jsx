import React from "react";
import { Link } from "react-router-dom";
import "./Property1DefaultHoverFalse3.css";

function Property1DefaultHoverFalse3(props) {
  const { children, className } = props;

  return (
    <Link to="/login">
      <div className={`button-login-1 ${className || ""}`}>
        <div className="log-in-1 valign-text-middle x24pt---bold---monserrat">{children}</div>
      </div>
    </Link>
  );
}

export default Property1DefaultHoverFalse3;
