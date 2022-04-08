import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./TinyBarChartShowCartesianGridShowXA2.css";

function TinyBarChartShowCartesianGridShowXA2() {
  return (
    <div className="tiny-bar-chart-show">
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
  width: 438,
  height: 232,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  fillColor: "#3366FF",
  strokeColor: "#3366FF",
  dataKey: "blue",
  xAxisDataKey: "blue",
  data: [{ blue: 60 }, { blue: 200 }, { blue: 400 }, { blue: 208 }, { blue: 450 }, { blue: 100 }],
  align: "center",
  verticalAlign: "bottom",
  ShowCartesianGrid: true,
  ShowXAxis: true,
  ShowYAxis: true,
  ShowTooltip: true,
  ShowLegend: false,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};

export default TinyBarChartShowCartesianGridShowXA2;
