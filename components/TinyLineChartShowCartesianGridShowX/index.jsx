import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./TinyLineChartShowCartesianGridShowX.css";

function TinyLineChartShowCartesianGridShowX() {
  return (
    <div className="tiny-line-chart-show">
      <Recharts.LineChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="0 1" />}
        <Recharts.XAxis dataKey={args.lineKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Line type="monotone" dataKey={args.lineKey} stroke={args.lineColor} dot={false} strokeWidth={2} />
      </Recharts.LineChart>
    </div>
  );
}

const args = {
  width: 959,
  height: 170,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  lineColor: "#3366FF",
  lineKey: "blue",
  data: [{ blue: 60 }, { blue: 200 }, { blue: 400 }, { blue: 208 }, { blue: 450 }, { blue: 0 }],
  align: "center",
  verticalAlign: "bottom",
  ShowCartesianGrid: false,
  ShowXAxis: false,
  ShowYAxis: false,
  ShowTooltip: false,
  ShowLegend: false,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};

export default TinyLineChartShowCartesianGridShowX;
