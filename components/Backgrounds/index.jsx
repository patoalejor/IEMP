import React from "react";
import "./Backgrounds.css";

function Backgrounds(props) {
  const { children } = props;

  return (
    <div className="backgrounds">
      <div className="menu-bg"></div>
      <div className="overlap-group-4">
        <div className="page-title valign-text-middle x36pt---bold---monserrat">{children}</div>
      </div>
    </div>
  );
}

export default Backgrounds;
