import React from "react";
import "./TextAlignmentLeft.css";

function TextAlignmentLeft(props) {
  const { children, className } = props;

  return (
    <div className={`table__cell-7 ${className || ""}`}>
      <div className="text valign-text-middle inter-normal-mine-shaft-16px">{children}</div>
    </div>
  );
}

export default TextAlignmentLeft;
