import React from "react";
import SortIconNone from "../SortIconNone";
import TextAlignmentLeft from "../TextAlignmentLeft";
import "./ColumnFill2.css";

function ColumnFill2(props) {
  const {
    sortIconNoneProps,
    textAlignmentLeft1Props,
    textAlignmentLeft2Props,
    textAlignmentLeft3Props,
    textAlignmentLeft4Props,
    textAlignmentLeft5Props,
    textAlignmentLeft6Props,
  } = props;

  return (
    <div className="column-fill-4">
      <SortIconNone className={sortIconNoneProps.className}>{sortIconNoneProps.children}</SortIconNone>
      <TextAlignmentLeft className={textAlignmentLeft1Props.className}>
        {textAlignmentLeft1Props.children}
      </TextAlignmentLeft>
      <TextAlignmentLeft className={textAlignmentLeft2Props.className}>
        {textAlignmentLeft2Props.children}
      </TextAlignmentLeft>
      <TextAlignmentLeft className={textAlignmentLeft3Props.className}>
        {textAlignmentLeft3Props.children}
      </TextAlignmentLeft>
      <TextAlignmentLeft className={textAlignmentLeft4Props.className}>
        {textAlignmentLeft4Props.children}
      </TextAlignmentLeft>
      <TextAlignmentLeft className={textAlignmentLeft5Props.className}>
        {textAlignmentLeft5Props.children}
      </TextAlignmentLeft>
      <TextAlignmentLeft className={textAlignmentLeft6Props.className}>
        {textAlignmentLeft6Props.children}
      </TextAlignmentLeft>
    </div>
  );
}

export default ColumnFill2;
