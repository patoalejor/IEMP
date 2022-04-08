import React from "react";
import "./SortIconNone.css";

function SortIconNone(props) {
  const { children, className } = props;

  return (
    <div className={`table__cell-header-2 ${className || ""}`}>
      <div className="text-2 valign-text-middle inter-medium-mine-shaft-16px">{children}</div>
    </div>
  );
}

export default SortIconNone;
