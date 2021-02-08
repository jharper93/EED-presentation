import React from "react";
import {
  ComposedChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const BarGraph = ({ level = 0 }) => {
  const data = [
    {
      name: "Sensor",
      level: level,
    },
  ];

  return (
    <ResponsiveContainer>
      <ComposedChart
        layout="vertical"
        width={600}
        height={100}
        data={data}
        margin={{
          top: 20,
          right: 40,
          bottom: 20,
          left: 40,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          type="number"
          domain={[0, 100]}
          tickCount={5}
          ticks={[0, 25, 50, 75, 100]}
        />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="level" barSize={40} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
