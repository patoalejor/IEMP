import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./GraphBankModule.css";

function GraphBankModule() {
  return (
    <div className="graph_bank_module">
      <Recharts.BarChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
        <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Bar dataKey={args.data1Key} fill={args.data1Color} />
        <Recharts.Bar dataKey={args.data2Key} fill={args.data2Color} />
      </Recharts.BarChart>
    </div>
  );
}

const args = {
  width: 482,
  height: 224,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  xAxisDataKey: "name",
  data1Color: "#3366FF",
  data2Color: "#FF008E",
  data1Key: "Normal",
  data2Key: "Abnormal",
  data: [
    { name: "M001", Normal: 60, Abnormal: 24 },
    { name: "M002", Normal: 20, Abnormal: 13 },
    { name: "M003", Normal: 40, Abnormal: 20 },
    { name: "M004", Normal: 20, Abnormal: 39 },
    { name: "M005", Normal: 45, Abnormal: 48 },
    { name: "M006", Normal: 50, Abnormal: 38 },
  ],
  align: "center",
  verticalAlign: "bottom",
  ShowCartesianGrid: true,
  ShowXAxis: true,
  ShowYAxis: true,
  ShowLegend: true,
  ShowTooltip: true,
  widgetCategory: "6216125a39298487a332afed",
  widgetCategoryName: "Charts",
};

export default GraphBankModule;
