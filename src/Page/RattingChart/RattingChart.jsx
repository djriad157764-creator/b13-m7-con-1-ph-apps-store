import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const RattingChart = ({ ratting }) => {
  const sortedData = [...ratting].reverse();
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={sortedData}
          layout="vertical"
        >
          <XAxis type="count" />
          <YAxis dataKey="name" type="category" />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RattingChart;
