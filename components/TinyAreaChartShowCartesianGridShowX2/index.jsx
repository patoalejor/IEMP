import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./TinyAreaChartShowCartesianGridShowX2.css";

function TinyAreaChartShowCartesianGridShowX2() {
  return (
    <div className="tiny-area-chart-show">
      <Recharts.AreaChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
        <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Area type="monotone" dataKey={args.dataKey} stroke={args.strokeColor} fill={args.fillColor} />
      </Recharts.AreaChart>
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
  align: "center",
  verticalAlign: "bottom",
  data: [{ blue: 60 }, { blue: 200 }, { blue: 400 }, { blue: 208 }, { blue: 450 }, { blue: 0 }],
  ShowCartesianGrid: true,
  ShowXAxis: true,
  ShowYAxis: true,
  ShowTooltip: true,
  ShowLegend: false,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};

export default TinyAreaChartShowCartesianGridShowX2;
