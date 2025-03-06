"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useState } from "react";

// Data for each year
const chartData = {
  2023: [
    {
      category: "Animal Rights and Welfare",
      inversion: 104728,
      fill: "rgb(6, 182, 212)",
    },
    {
      category: "Underserved Communities",
      inversion: 37325,
      fill: "rgb(8, 145, 178)",
    },
  ],
  2022: [
    {
      category: "Animal Rights and Welfare",
      inversion: 134589,
      fill: "rgb(6, 182, 212)",
    },
    {
      category: "Underserved Communities",
      inversion: 33680,
      fill: "rgb(8, 145, 178)",
    },
    { category: "Administrative", inversion: 6640, fill: "rgb(14, 116, 144)" },
  ],
  2021: [
    {
      category: "Animal Rights and Welfare",
      inversion: 39473,
      fill: "rgb(6, 182, 212)",
    },
    {
      category: "Underserved Communities",
      inversion: 5623,
      fill: "rgb(8, 145, 178)",
    },
    { category: "Administrative", inversion: 2532, fill: "rgb(14, 116, 144)" },
  ],
};

// Chart configuration
const chartConfig = {
  inversion: { label: "inversion" },
  AnimalRightsandWelfare: {
    label: "Animal Rights and Welfare",
    color: "hsl(186, 93.8%, 42.7%)",
  },
  UnderservedCommunities: {
    label: "Underserved Communities",
    color: "hsl(186, 85.7%, 37.3%)",
  },
  Administrative: { label: "Administrative", color: "hsl(186, 77.4%, 32.2%)" },
} satisfies ChartConfig;

export default function Charts() {
  const [selectedYear, setSelectedYear] =
    useState<keyof typeof chartData>(2023);

  // Reusable PieChart component
  const renderPieChart = (data: (typeof chartData)[keyof typeof chartData]) => (
    <ChartContainer
      config={chartConfig}
      className="mx-auto max-h-[800px] px-0 w-full overflow-visible">
      <PieChart>
        <Pie
          data={data}
          dataKey="inversion"
          labelLine={true}
          paddingAngle={0.2}
          innerRadius="50%"
          stroke="rgb(229, 231, 235)"
          strokeWidth={1}
          label={({ payload, ...props }) => {
            const formattedInversion = payload.inversion.toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              }
            );

            return (
              <g>
                <text
                  x={props.x}
                  y={props.y + 10}
                  textAnchor={props.textAnchor}
                  dominantBaseline={props.dominantBaseline}
                  fill="rgb(107, 114, 128)"
                  fontSize={14}
                  fontWeight="bold">
                  {payload.category}
                </text>
                <text
                  x={props.x}
                  y={props.y - 10}
                  textAnchor={props.textAnchor}
                  dominantBaseline={props.dominantBaseline}
                  fill="rgb(107, 114, 128)"
                  fontSize={18}
                  fontWeight="bold">
                  {formattedInversion}
                </text>
              </g>
            );
          }}
          nameKey="category"
        />
      </PieChart>
    </ChartContainer>
  );

  return (
    <Card className="flex flex-col mx-auto border-none w-full shadow-none justify-center items-center min-h-[calc(100vh-160px)]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-gray-500 font-bold text-2xl sm:text-4xl mb-4">
          How Donations Are Spent
        </CardTitle>
        <div className="flex justify-center items-center space-x-4">
            {Object.keys(chartData)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => (
              <button
              key={year}
              onClick={() =>
              setSelectedYear(year as unknown as keyof typeof chartData)
              }
              className={`${
              Number(selectedYear) === Number(year) ? "bg-cyan-500" : "bg-cyan-300"
              } text-white font-bold rounded-full w-24 py-4`}>
              {year}
              </button>
            ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0 w-full">
        {renderPieChart(chartData[selectedYear])}
      </CardContent>
    </Card>
  );
}
