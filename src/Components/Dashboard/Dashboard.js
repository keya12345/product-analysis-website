import React from "react";
import { Line, LineChart, Pie, PieChart, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="chart-box">
      <div className="line-chart">
        <LineChart width={350} height={250} data={data}>
          <Line dataKey={"investment"}></Line>
          <Line dataKey={"revenue"}></Line>
          <XAxis dataKey={"month"} />
          <YAxis />
        </LineChart>
      </div>
      <div className="pai-chart">
        <PieChart width={350} height={250}>
          <Pie
            data={data}
            dataKey="revenue"
            nameKey=""
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="investment"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
