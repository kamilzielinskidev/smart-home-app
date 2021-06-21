import BatteryCharging90Rounded from "@material-ui/icons/BatteryCharging90Rounded";
import HighlightRounded from "@material-ui/icons/HighlightRounded";
import React, { FC, ReactNode } from "react";

type ElectricUsage = { label: string; amount: string; icon: ReactNode };
type ElectricUsages = ElectricUsage[];

const electricUsages: ElectricUsages = [
  {
    label: "Power usage today",
    amount: "35.5 kWh",
    icon: <HighlightRounded sx={{ fontSize: "2.5rem" }} />,
  },
  {
    label: "Power usage this month",
    amount: "680 kWh",
    icon: <BatteryCharging90Rounded sx={{ fontSize: "2.5rem" }} />,
  },
];

const GeneralInformations: FC = () => (
  <div
    className="flex justify-between rounded-xl mx-5 px-2 p-5"
    style={{ backgroundColor: "#8EAEFF18", color: "#6178B2" }}
  >
    {electricUsages.map(({ label, amount, icon }) => (
      <div key={label} className="flex">
        <div className="flex flex-col justify-center">{icon}</div>
        <div className="ml-2">
          <div className="text-lg">{amount}</div>
          <div className="text-xs font-normal">{label}</div>
        </div>
      </div>
    ))}
  </div>
);

export default GeneralInformations;
