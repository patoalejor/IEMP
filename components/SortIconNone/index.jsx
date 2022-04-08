import React from "react";
import "./SortIconNone.css";

function SortIconNone(props) {
  const { children, className } = props;

  return (
    <div className={`table__cell-header-3 ${className || ""}`}>
      <div className="text-3 valign-text-middle inter-medium-mine-shaft-16px">{children}</div>
    </div>
  );
}

export default SortIconNone;
