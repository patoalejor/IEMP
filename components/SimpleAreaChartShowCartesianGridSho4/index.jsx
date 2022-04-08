import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./SimpleAreaChartShowCartesianGridSho4.css";

function SimpleAreaChartShowCartesianGridSho4() {
  return (
    <div className="simple-area-chart-sh">
      <Recharts.AreaChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}

        <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}

        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Area
          type="monotone"
          dataKey={args.area1Key}
          stroke={args.area1StrokeColor}
          fill={args.fill1Color}
          fillOpacity={args.fill1Opacity}
        />
        <Recharts.Area
          type="monotone"
          dataKey={args.area2Key}
          stroke={args.area2StrokeColor}
          fill={args.fill2Color}
          fillOpacity={args.fill2Opacity}
        />
      </Recharts.AreaChart>
    </div>
  );
}

const args = {
  width: 533,
  height: 203,
  margin: { top: 20, right: 10, left: 10, bottom: 0 },
  fill1Color: "#3366FF",
  fill2Color: "#009379",
  fill1Opacity: 0.5,
  fill2Opacity: 0.5,
  area1StrokeColor: "#3366FF",
  area2StrokeColor: "#009379",
  area1Key: "ESS",
  area2Key: "Load",
  xAxisDataKey: "Time",
  align: "Power",
  verticalAlign: "bottom",
  data: [
    { name: "6:00", ESS: 400, Load: 140, label: "a" },
    { name: "6:30", ESS: 100, Load: 490 },
    { name: "7:00", ESS: 100, Load: 400 },
    { name: "7:30", ESS: 400, Load: 150 },
    { name: "8:00", ESS: 400, Load: 120 },
    { name: "8:30", ESS: 400, Load: 280 },
    { name: "9:00", ESS: 200, Load: 340 },
    { name: "9:30", ESS: 100, Load: 490 },
    { name: "10:00", ESS: 100, Load: 400 },
    { name: "11:30", ESS: 100, Load: 150 },
    { name: "12:00", ESS: 200, Load: 120 },
    { name: "12:30", ESS: 400, Load: 280 },
  ],
  ShowCartesianGrid: false,
  ShowXAxis: true,
  ShowYAxis: true,
  ShowTooltip: true,
  ShowLegend: false,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};

export default SimpleAreaChartShowCartesianGridSho4;
