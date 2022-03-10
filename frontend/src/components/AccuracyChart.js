import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Day 1",
    uv: 3001,
    pv: 5500,
    amt: 2290,
  },
  {
    name: "Day 2",
    uv: 4010,
    pv: 6700,
    amt: 2290,
  },
  {
    name: "Day 3",
    uv: 3300,
    pv: 1200,
    amt: 2290,
  },
  {
    name: "Day 4",
    uv: 1800,
    pv: 5600,
    amt: 2290,
  },
  {
    name: "Day 5",
    uv: 2500,
    pv: 4400,
    amt: 2290,
  },
  {
    name: "Day 6",
    uv: 4000,
    pv: 3400,
    amt: 2290,
  },
];

export const AccuracyChart = () => {
  return (
    <LineChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};
