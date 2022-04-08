import React from "react";
import { Link } from "react-router-dom";
import "./Property1DefaultHoverFalse2.css";

function Property1DefaultHoverFalse2(props) {
  const { children } = props;

  return (
    <Link to="/dashboard">
      <div className="button-newuser">
        <div className="create-user x24pt---bold---monserrat">{children}</div>
      </div>
    </Link>
  );
}

export default Property1DefaultHoverFalse2;
