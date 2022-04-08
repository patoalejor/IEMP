import React from "react";
import ColumnFixed from "../ColumnFixed";
import ColumnFixed2 from "../ColumnFixed2";
import ColumnFill from "../ColumnFill";
import "./AutoLayoutTable.css";

function AutoLayoutTable(props) {
  const {
    columnFixedProps,
    columnFixed2Props,
    columnFill1Props,
    columnFill2Props,
    columnFill3Props,
    columnFill4Props,
    columnFill5Props,
  } = props;

  return (
    <div className="auto-layout-table">
      <ColumnFixed {...columnFixedProps} />
      <ColumnFixed2 {...columnFixed2Props} />
      <ColumnFill {...columnFill1Props} />
      <ColumnFill {...columnFill2Props} />
      <ColumnFill {...columnFill3Props} />
      <ColumnFill {...columnFill4Props} />
      <ColumnFill {...columnFill5Props} />
    </div>
  );
}

export default AutoLayoutTable;
