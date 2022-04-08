import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./SimpleDonutChartShowTooltipShowLege.css";

function SimpleDonutChartShowTooltipShowLege() {
  return (
    <div className="simple-donut-chart-s">
      <Recharts.PieChart {...args}>
        <Recharts.Pie
          data={args.data}
          dataKey={args.dataKey}
          cx="50%"
          cy="50%"
          outerRadius={args.dataOuterRadius}
          innerRadius={args.dataInnerRadius}
          fill={args.dataFillColor}
          label
        >
          {args.data.map((entry, index) => (
            <Recharts.Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Recharts.Pie>
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
      </Recharts.PieChart>
    </div>
  );
}

const args = {
  width: 280,
  height: 200,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  dataFillColor: "#3366FF",
  dataOuterRadius: 50,
  dataInnerRadius: 30,
  dataKey: "value",
  data: [
    { name: "On-Peak", value: 450, color: "#3366FF" },
    { name: "Mid-Peak", value: 250, color: "#009379" },
    { name: "Off-Peak", value: 350, color: "#FF6250" },
  ],
  align: "center",
  verticalAlign: "top",
  ShowTooltip: true,
  ShowLegend: true,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};

export default SimpleDonutChartShowTooltipShowLege;
