import React from "react";
import { Link } from "react-router-dom";
import "./Property1DefaultHoverFalse2.css";

function Property1DefaultHoverFalse2(props) {
  const { children } = props;

  return (
    <Link to="/login" className="align-self-flex-end">
      <div className="button-login">
        <div className="log-in valign-text-middle">{children}</div>
      </div>
    </Link>
  );
}

export default Property1DefaultHoverFalse2;
