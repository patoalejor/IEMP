import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./GraphTemperature.css";

function GraphTemperature(props) {
  const { className } = props;

  return (
    <div className={`graph_temperature ${className || ""}`}>
      <Recharts.BarChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
        <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Bar dataKey={args.dataKey} fill={args.fillColor} />
      </Recharts.BarChart>
    </div>
  );
}

const args = {
  width: 416,
  height: 67,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  fillColor: "#3366FF",
  strokeColor: "#3366FF",
  dataKey: "blue",
  xAxisDataKey: "name",
  data: [
    { name: "R001", blue: 1 },
    { name: "R002", blue: 1 },
    { name: "R003", blue: 1 },
    { name: "R004", blue: 1 },
    { name: "R005", blue: 1 },
    { name: "R006", blue: 1 },
    { name: "R007", blue: 1 },
    { name: "R008", blue: 1 },
    { name: "R009", blue: -1 },
    { name: "R010", blue: -1 },
    { name: "R011", blue: 1 },
    { name: "R012", blue: 1 },
    { name: "R013", blue: 1 },
    { name: "R014", blue: 1 },
    { name: "R015", blue: 1 },
    { name: "R016", blue: 1 },
    { name: "R017", blue: 1 },
    { name: "R018", blue: 1 },
    { name: "R019", blue: 1 },
    { name: "R020", blue: 1 },
    { name: "R021", blue: 1 },
    { name: "R022", blue: -1 },
    { name: "R023", blue: 1 },
    { name: "R024", blue: 1 },
    { name: "R025", blue: 1 },
    { name: "R026", blue: -1 },
    { name: "R027", blue: 1 },
    { name: "R028", blue: 1 },
    { name: "R029", blue: 1 },
    { name: "R030", blue: 1 },
  ],
  align: "center",
  verticalAlign: "bottom",
  ShowCartesianGrid: false,
  ShowXAxis: true,
  ShowYAxis: true,
  ShowTooltip: false,
  ShowLegend: false,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};
const args = {
  width: 416,
  height: 67,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  fillColor: "#3366FF",
  strokeColor: "#3366FF",
  dataKey: "blue",
  xAxisDataKey: "name",
  data: [
    { name: "R001", blue: 1 },
    { name: "R002", blue: 1 },
    { name: "R003", blue: 1 },
    { name: "R004", blue: 1 },
    { name: "R005", blue: 1 },
    { name: "R006", blue: 1 },
    { name: "R007", blue: 1 },
    { name: "R008", blue: 1 },
    { name: "R009", blue: -1 },
    { name: "R010", blue: -1 },
    { name: "R011", blue: 1 },
    { name: "R012", blue: 1 },
    { name: "R013", blue: 1 },
    { name: "R014", blue: 1 },
    { name: "R015", blue: 1 },
    { name: "R016", blue: 1 },
    { name: "R017", blue: 1 },
    { name: "R018", blue: 1 },
    { name: "R019", blue: 1 },
    { name: "R020", blue: 1 },
    { name: "R021", blue: 1 },
    { name: "R022", blue: -1 },
    { name: "R023", blue: 1 },
    { name: "R024", blue: 1 },
    { name: "R025", blue: 1 },
    { name: "R026", blue: -1 },
    { name: "R027", blue: 1 },
    { name: "R028", blue: 1 },
    { name: "R029", blue: 1 },
    { name: "R030", blue: 1 },
  ],
  align: "center",
  verticalAlign: "bottom",
  ShowCartesianGrid: false,
  ShowXAxis: true,
  ShowYAxis: true,
  ShowTooltip: false,
  ShowLegend: false,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};

export default GraphTemperature;
