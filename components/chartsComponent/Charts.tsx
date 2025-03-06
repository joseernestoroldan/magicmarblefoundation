"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useState } from "react";

const chartData2021 = [
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
  {
    category: "Administrative",
    inversion: 2532,
    fill: "rgb(14, 116, 144)",
  },
];

const chartData2022 = [
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
  {
    category: "Administrative",
    inversion: 6640,
    fill: "rgb(14, 116, 144)",
  },
];

const chartData2023 = [
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
];

const chartConfig = {
  inversion: {
    label: "inversion",
  },
  AnimalRightsandWelfare: {
    label: "Animal Rights and Welfare",
    color: "hsl(186, 93.8%, 42.7%)", // cyan-500
  },
  UnderservedCommunities: {
    label: "Underserved Communities",
    color: "hsl(186, 85.7%, 37.3%)", // cyan-600
  },
  Administrative: {
    label: "Administrative",
    color: "hsl(186, 77.4%, 32.2%)", // cyan-700
  },
} satisfies ChartConfig;

export default function Charts() {
  const [selector, setSelector] = useState("2023");

  return (
    <Card className="flex flex-col mx-auto border-none w-full justify-center items-center min-h-[calc(100vh-160px)]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-gray-500 font-bold text-2xl sm:text-4xl mb-4 ">
          How Donations Are Spent
        </CardTitle>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => setSelector("2023")}
            className={`${selector === "2023" ? "bg-cyan-500" : "bg-cyan-300"} text-white font-bold rounded-full w-24 py-4`}>
            2023
          </button>
            <button
            onClick={() => setSelector("2022")}
            className={`${selector === "2022" ? "bg-cyan-500" : "bg-cyan-300"} text-white font-bold rounded-full w-24 py-4`}>
            2022
            </button>
          <button
            onClick={() => setSelector("2021")}
            className={`${selector === "2021" ? "bg-cyan-500" : "bg-cyan-300"} text-white font-bold rounded-full w-24 py-4`}>
            2021
          </button>
        </div>
        {/* {selector === "2021" && (
          <CardDescription className="text-gray-500 text-2xl font-bold underline mt-8">
            2021
          </CardDescription>
        )}
        {selector === "2022" && (
          <CardDescription className="text-gray-500 text-2xl font-bold underline mt-8">
            2022
          </CardDescription>
        )}
        {selector === "2023" && (
          <CardDescription className="text-gray-500 text-2xl font-bold underline mt-8">
            2023
          </CardDescription>
        )} */}
      </CardHeader>
      <CardContent className="flex-1 pb-0 w-full">
        {selector === "2021" && (
          <ChartContainer
            config={chartConfig}
            className="mx-auto max-h-[800px] px-0 w-full overflow-visible">
            <PieChart className="">
              <Pie
                data={chartData2021}
                dataKey="inversion"
                labelLine={true}
                paddingAngle={0.2} // Add a small gap between slices
                innerRadius="50%" // Optional: Add a small inner radius for separation
                // stroke gray-200 equivalent
                stroke="rgb(229, 231, 235)"
                // stroke-width gray-500 equivalent
                strokeWidth={1}
                label={({ payload, ...props }) => {
                  // Format inversion as US dollars
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
                      {/* First <text> for payload.category */}
                      <text
                        x={props.x}
                        y={props.y + 10} // Adjust y position to move it down
                        textAnchor={props.textAnchor}
                        dominantBaseline={props.dominantBaseline}
                        fill="rgb(107, 114, 128)" // text-gray-500 equivalent
                        fontSize={14} // Smaller font size for the inversion
                        fontWeight="bold">
                        {payload.category}
                      </text>
                      <text
                        x={props.x}
                        y={props.y - 10} // Adjust y position to move it up
                        textAnchor={props.textAnchor}
                        dominantBaseline={props.dominantBaseline}
                        fill="rgb(107, 114, 128)" // text-gray-500 equivalent
                        fontSize={18} // Adjust font size if needed
                        fontWeight="bold">
                        {formattedInversion}
                      </text>
                      {/* Second <text> for formattedInversion */}
                    </g>
                  );
                }}
                nameKey="category"
              />
            </PieChart>
          </ChartContainer>
        )}

        {selector === "2022" && (
          <ChartContainer
            config={chartConfig}
            className="mx-auto max-h-[800px] px-0 w-full overflow-visible">
            <PieChart className="">
              <Pie
                data={chartData2022}
                dataKey="inversion"
                labelLine={true}
                paddingAngle={0.2} // Add a small gap between slices
                innerRadius="50%" // Optional: Add a small inner radius for separation
                // stroke gray-200 equivalent
                stroke="rgb(229, 231, 235)"
                // stroke-width gray-500 equivalent
                strokeWidth={1}
                label={({ payload, ...props }) => {
                  // Format inversion as US dollars
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
                      {/* First <text> for payload.category */}
                      <text
                        x={props.x}
                        y={props.y + 10} // Adjust y position to move it down
                        textAnchor={props.textAnchor}
                        dominantBaseline={props.dominantBaseline}
                        fill="rgb(107, 114, 128)" // text-gray-500 equivalent
                        fontSize={14} // Smaller font size for the inversion
                        fontWeight="bold">
                        {payload.category}
                      </text>
                      <text
                        x={props.x}
                        y={props.y - 10} // Adjust y position to move it up
                        textAnchor={props.textAnchor}
                        dominantBaseline={props.dominantBaseline}
                        fill="rgb(107, 114, 128)" // text-gray-500 equivalent
                        fontSize={18} // Adjust font size if needed
                        fontWeight="bold">
                        {formattedInversion}
                      </text>
                      {/* Second <text> for formattedInversion */}
                    </g>
                  );
                }}
                nameKey="category"
              />
            </PieChart>
          </ChartContainer>
        )}
        { selector === "2023" &&
          <ChartContainer
            config={chartConfig}
            className="mx-auto max-h-[800px] px-0 w-full overflow-visible">
            <PieChart className="">
              <Pie
              data={chartData2023}
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
        }
      </CardContent>
    </Card>
  );
}
