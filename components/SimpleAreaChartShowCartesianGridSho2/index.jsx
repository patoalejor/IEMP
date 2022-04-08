import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./SimpleAreaChartShowCartesianGridSho2.css";

function SimpleAreaChartShowCartesianGridSho2() {
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
  width: 534,
  height: 205,
  margin: { top: 0, right: 10, left: 10, bottom: 0 },
  fill1Color: "#3366FF",
  fill2Color: "#009379",
  fill1Opacity: 0.5,
  fill2Opacity: 0.5,
  area1StrokeColor: "#3366FF",
  area2StrokeColor: "#009379",
  area1Key: "true",
  area2Key: "Pred",
  xAxisDataKey: "name",
  align: "center",
  verticalAlign: "bottom",
  data: [
    { name: "6:00", true: 100, Pred: 140 },
    { name: "6:30", true: 140, Pred: 190 },
    { name: "7:00", true: 400, Pred: 400 },
    { name: "7:30", true: 350, Pred: 450 },
    { name: "8:00", true: 450, Pred: 520 },
    { name: "8:30", true: 400, Pred: 480 },
    { name: "9:00", true: 300, Pred: 340 },
    { name: "9:30", true: 200, Pred: 190 },
    { name: "10:00", true: 400, Pred: 300 },
    { name: "11:30", true: 440, Pred: 350 },
    { name: "12:00", true: 100, Pred: 120 },
    { name: "12:30", true: 100, Pred: 280 },
  ],
  ShowCartesianGrid: false,
  ShowXAxis: true,
  ShowYAxis: true,
  ShowTooltip: true,
  ShowLegend: false,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};

export default SimpleAreaChartShowCartesianGridSho2;
