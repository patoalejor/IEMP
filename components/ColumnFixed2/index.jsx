import React from "react";
import SortIconNone from "../SortIconNone";
import TextAlignmentLeft from "../TextAlignmentLeft";
import "./ColumnFixed2.css";

function ColumnFixed2(props) {
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
    <div className={`column-fixed-2 ${className || ""}`}>
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

export default ColumnFixed2;
