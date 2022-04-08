import React from "react";
import SortIconNone from "../SortIconNone";
import TextAlignmentLeft from "../TextAlignmentLeft";
import "./ColumnFixed.css";

function ColumnFixed(props) {
  const {
    className,
    sortIconNoneProps,
    textAlignmentLeft1Props,
    textAlignmentLeft2Props,
    textAlignmentLeft3Props,
    textAlignmentLeft4Props,
    textAlignmentLeft5Props,
    textAlignmentLeft6Props,
  } = props;

  return (
    <div className={`column-fixed ${className || ""}`}>
      <SortIconNone>{sortIconNoneProps.children}</SortIconNone>
      <TextAlignmentLeft>{textAlignmentLeft1Props.children}</TextAlignmentLeft>
      <TextAlignmentLeft>{textAlignmentLeft2Props.children}</TextAlignmentLeft>
      <TextAlignmentLeft>{textAlignmentLeft3Props.children}</TextAlignmentLeft>
      <TextAlignmentLeft>{textAlignmentLeft4Props.children}</TextAlignmentLeft>
      <TextAlignmentLeft>{textAlignmentLeft5Props.children}</TextAlignmentLeft>
      <TextAlignmentLeft>{textAlignmentLeft6Props.children}</TextAlignmentLeft>
    </div>
  );
}

export default ColumnFixed;
