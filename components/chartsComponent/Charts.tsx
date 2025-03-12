"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useState } from "react";

const total2023 = 104728 + 37325;
const total2022 = 134589 + 33680 + 6640;
const total2021 = 39473 + 5623 + 2532;

// Data for each year
const chartData = {
  2023: [
    {
      category: "Animal Rights and Welfare",
      inversion: 104728,
      fill: "rgb(6, 182, 212)",
      total: total2023,
    },
    {
      category: "Underserved Communities",
      inversion: 37325,
      fill: "rgb(8, 145, 178)",
      total: total2023,
    },
  ],
  2022: [
    {
      category: "Animal Rights and Welfare",
      inversion: 134589,
      fill: "rgb(6, 182, 212)",
      total: total2022,
    },
    {
      category: "Underserved Communities",
      inversion: 33680,
      fill: "rgb(8, 145, 178)",
      total: total2022,
    },
    {
      category: "Administrative",
      inversion: 6640,
      fill: "rgb(14, 116, 144)",
      total: total2022,
    },
  ],
  2021: [
    {
      category: "Animal Rights and Welfare",
      inversion: 39473,
      fill: "rgb(6, 182, 212)",
      total: total2021,
    },
    {
      category: "Underserved Communities",
      inversion: 5623,
      fill: "rgb(8, 145, 178)",
      total: total2021,
    },
    {
      category: "Administrative",
      inversion: 2532,
      fill: "rgb(14, 116, 144)",
      total: total2021,
    },
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
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto max-h-[800px] px-0 w-full overflow-visible hidden min-[500px]:block">
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
                <g 
                x ={props.x < 350 ? props.x - 20 : props.x + 20}
                y ={props.y > 350 ? props.y - 20 : props.y + 20}
                
                >
                  
                  <text
                    x={props.x + 20}
                    y={props.y - 30}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="rgb(107, 114, 128)"
                    fontSize={window.innerWidth < 640 ? 14 : 20}
                    fontWeight="bold"
                    
                    >
                    {`${((payload.inversion / payload.total) * 100).toFixed(1)}%`}
                  </text>

                  <text
                    x={props.x}
                    y={props.y + 10}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="rgb(107, 114, 128)"
                    fontSize={window.innerWidth < 640 ? 10 : 14}
                    fontWeight="bold">
                    {payload.category}
                  </text>
                  <text
                    x={props.x}
                    y={props.y - 10}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="rgb(107, 114, 128)"
                    fontSize={window.innerWidth < 640 ? 14 : 18}
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

      <div className="w-full flex flex-col items-center min-[500px]:hidden">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[800px] min-h-[300px] px-0 w-full overflow-visible">
          <PieChart>
            <Pie
              data={data}
              dataKey="inversion"
              labelLine={false}
              paddingAngle={0.2}
              innerRadius="50%"
              stroke="rgb(229, 231, 235)"
              strokeWidth={1}
              nameKey="category"
            />
          </PieChart>
        </ChartContainer>

        {/* Table to show the information of each year */}

        <div className="w-full mt-4">
          <table className="w-full border border-black text-gray-500 text-xs">
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td
                    className={` font-bold p-2 ${index % 2 === 0 ? "bg-white" : "bg-cyan-100"}`}>
                    {item.category}
                  </td>
                  <td
                    className={` font-bold p-2 ${index % 2 === 0 ? "bg-white" : "bg-cyan-100"}`}>
                    {item.inversion.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td
                    className={` font-bold p-2 ${index % 2 === 0 ? "bg-white" : "bg-cyan-100"}`}>
                    <div
                      className="w-8 h-8"
                      style={{ backgroundColor: item.fill }}></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="flex flex-col mx-auto border-none w-full shadow-none justify-center items-center min-h-[calc(100vh-160px)] ">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-cyan-500 font-bold text-xl sm:text-2xl mt-4 mb-12">
          How Donations Are Spent
        </CardTitle>
        <div className="flex min-[500px]:flex-row flex-col  justify-center items-center min-[500px]:space-x-4 space-x-0 min-[500px]:space-y-0 space-y-4">
          {Object.keys(chartData)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => (
              <button
                key={year}
                onClick={() =>
                  setSelectedYear(year as unknown as keyof typeof chartData)
                }
                className={`${
                  Number(selectedYear) === Number(year)
                    ? "bg-cyan-500"
                    : "bg-cyan-300"
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
