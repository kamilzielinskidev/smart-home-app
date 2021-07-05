import { SvgIconProps } from "@material-ui/core";
import BatteryCharging90Rounded from "@material-ui/icons/BatteryCharging90Rounded";
import HighlightRounded from "@material-ui/icons/HighlightRounded";
import React, { FC } from "react";

type ElectricUsage = { label: string; amount: string; icon: FC<SvgIconProps> };
type ElectricUsages = ElectricUsage[];

const electricUsages: ElectricUsages = [
  {
    label: "Power usage today",
    amount: "35.5 kWh",
    icon: HighlightRounded,
  },
  {
    label: "Power usage this month",
    amount: "680 kWh",
    icon: BatteryCharging90Rounded,
  },
];

const GeneralInformations: FC = () => (
  <div
    className="flex justify-between rounded-xl px-2 p-5"
    style={{ backgroundColor: "#8EAEFF18", color: "#6178B2" }}
  >
    {electricUsages.map(({ label, amount, icon: Icon }) => (
      <div key={label} className="flex">
        <div className="flex flex-col justify-center">
          <Icon sx={{ fontSize: "2.5rem" }} />
        </div>
        <div className="ml-2">
          <div className="text-lg">{amount}</div>
          <div className="text-xs font-normal">{label}</div>
        </div>
      </div>
    ))}
  </div>
);

export default GeneralInformations;
