import React from "react";
import ColumnFixed from "../ColumnFixed";
import ColumnFixed2 from "../ColumnFixed2";
import ColumnFill2 from "../ColumnFill2";
import ColumnFill from "../ColumnFill";
import "./AutoLayoutTable2.css";

function AutoLayoutTable2(props) {
  const {
    columnFixedProps,
    columnFixed2Props,
    columnFill21Props,
    columnFill22Props,
    columnFill23Props,
    columnFillProps,
  } = props;

  return (
    <div className="auto-layout-table-1">
      <ColumnFixed {...columnFixedProps} />
      <ColumnFixed2 {...columnFixed2Props} />
      <ColumnFill2
        sortIconNoneProps={columnFill21Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill21Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill21Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill21Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill21Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill21Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill21Props.textAlignmentLeft6Props}
      />
      <ColumnFill2
        sortIconNoneProps={columnFill22Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill22Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill22Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill22Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill22Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill22Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill22Props.textAlignmentLeft6Props}
      />
      <ColumnFill2
        sortIconNoneProps={columnFill23Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill23Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill23Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill23Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill23Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill23Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill23Props.textAlignmentLeft6Props}
      />
      <ColumnFill {...columnFillProps} />
    </div>
  );
}

export default AutoLayoutTable2;
