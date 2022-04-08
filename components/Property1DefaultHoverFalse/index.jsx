import React from "react";
import { Link } from "react-router-dom";
import "./Property1DefaultHoverFalse.css";

function Property1DefaultHoverFalse(props) {
  const { children } = props;

  return (
    <Link to="/dashboard">
      <div className="button-newuser">
        <div className="create-user x24pt---bold---monserrat">{children}</div>
      </div>
    </Link>
  );
}

export default Property1DefaultHoverFalse;
