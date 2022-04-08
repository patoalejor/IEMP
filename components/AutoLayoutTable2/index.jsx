import React from "react";
import ColumnFixed from "../ColumnFixed";
import ColumnFixed2 from "../ColumnFixed2";
import ColumnFill3 from "../ColumnFill3";
import ColumnFill2 from "../ColumnFill2";
import "./AutoLayoutTable2.css";

function AutoLayoutTable2(props) {
  const {
    columnFixedProps,
    columnFixed2Props,
    columnFill31Props,
    columnFill32Props,
    columnFill33Props,
    columnFill34Props,
    columnFill2Props,
  } = props;

  return (
    <div className="auto-layout-table">
      <ColumnFixed {...columnFixedProps} />
      <ColumnFixed2 {...columnFixed2Props} />
      <ColumnFill3
        sortIconNoneProps={columnFill31Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill31Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill31Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill31Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill31Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill31Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill31Props.textAlignmentLeft6Props}
      />
      <ColumnFill3
        sortIconNoneProps={columnFill32Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill32Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill32Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill32Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill32Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill32Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill32Props.textAlignmentLeft6Props}
      />
      <ColumnFill3
        sortIconNoneProps={columnFill33Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill33Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill33Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill33Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill33Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill33Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill33Props.textAlignmentLeft6Props}
      />
      <ColumnFill3
        sortIconNoneProps={columnFill34Props.sortIconNoneProps}
        textAlignmentLeft1Props={columnFill34Props.textAlignmentLeft1Props}
        textAlignmentLeft2Props={columnFill34Props.textAlignmentLeft2Props}
        textAlignmentLeft3Props={columnFill34Props.textAlignmentLeft3Props}
        textAlignmentLeft4Props={columnFill34Props.textAlignmentLeft4Props}
        textAlignmentLeft5Props={columnFill34Props.textAlignmentLeft5Props}
        textAlignmentLeft6Props={columnFill34Props.textAlignmentLeft6Props}
      />
      <ColumnFill2 {...columnFill2Props} />
    </div>
  );
}

export default AutoLayoutTable2;
