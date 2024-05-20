import { ChartBar, User } from "@phosphor-icons/react";
import Stack from "design-system/dist/components/Chart/Stack";
import React, { ReactNode } from "react";

type Props = {
  label: string;
  value: number;
  maxValue: number;
  icon: ReactNode;
  iconBgColor: string;
  StackValues: {
    value: number;
    label: string;
  }[];
};

export default function WidgetA({
  label,
  value,
  maxValue,
  icon,
  iconBgColor,
  StackValues,
}: Props) {
  const valueInPercentage = (value / maxValue) * 100;
  return (
    <div className="flex flex-col w-4/12 px-5 py-7 border border-slate-500 rounded-lg">
      <div className="flex flex-row gap-x-4 gap-y-1 mb-5">
        <span
          className={`w-11 h-11 flex items-center justify-center text-white flex-none ${iconBgColor} rounded-full`}
        >
          {icon}
        </span>
        <span className="flex flex-col">
          <h6 className="text-secondary text-xs">{label}</h6>
          <span className="text-primary font-bold">{value}</span>
        </span>
      </div>
      <div className="rounded-full h-2 bg-slate-200 mb-6">
        <div
          className="bg-primary rounded-full h-full"
          style={{ width: `${valueInPercentage}%` }}
        ></div>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-8 mr-2">
          <Stack
            options={{
              height: 180,
              widht: 300,
            }}
            data={[
              {
                legend: "level",
                color: "#51459E",
                type: "bar",
                values: StackValues,
              },
            ]}
          />
        </div>
        <div
          className={[
            "font-bold",
            `${valueInPercentage < 30 ? "text-red-400" : "text-primary"}`,
          ].join(" ")}
        >
          {valueInPercentage < 30 ? "-" : "+"}{" "}
          {Number(valueInPercentage).toFixed(2)}%
        </div>
        <div className="ml-auto">
          <ChartBar size={26} />
        </div>
      </div>
    </div>
  );
}
