import React from "react";
import ColumnFixed from "../ColumnFixed";
import ColumnFixed2 from "../ColumnFixed2";
import ColumnFill from "../ColumnFill";
import ColumnFill2 from "../ColumnFill2";
import "./AutoLayoutTable.css";

function AutoLayoutTable(props) {
  const {
    sortIconNone1Props,
    sortIconNone2Props,
    columnFill1Props,
    columnFill2Props,
    columnFill3Props,
    columnFill3Props2,
  } = props;

  return (
    <div className="summary-alarm-table">
      <ColumnFixed {...sortIconNone1Props} />
      <ColumnFixed2 {...sortIconNone2Props} />
      <ColumnFill
        sortIconNoneProps={columnFill1Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill1Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill1Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill1Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill1Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill1Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill1Props.textAlignmentLeft6Props}
      />
      <ColumnFill
        sortIconNoneProps={columnFill2Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill2Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill2Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill2Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill2Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill2Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill2Props.textAlignmentLeft6Props}
      />
      <ColumnFill
        sortIconNoneProps={columnFill3Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill3Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill3Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill3Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill3Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill3Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill3Props.textAlignmentLeft6Props}
      />
      <ColumnFill2 {...columnFill3Props2} />
    </div>
  );
}

export default AutoLayoutTable;
