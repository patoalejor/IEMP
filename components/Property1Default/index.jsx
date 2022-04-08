import React from "react";
import { Link } from "react-router-dom";
import "./Property1Default.css";

function Property1Default(props) {
  const { children } = props;

  return (
    <Link to="/newuser">
      <div className="sign-up">
        <div className="sign-up-1 x18pt---bold---monserrat">{children}</div>
      </div>
    </Link>
  );
}

export default Property1Default;
