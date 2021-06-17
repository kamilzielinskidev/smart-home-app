import CardMaterial from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AcUnitOutlined from "@material-ui/icons/AcUnitOutlined";
import CellWifiOutlined from "@material-ui/icons/CellWifiOutlined";
import LiveTvOutlined from "@material-ui/icons/LiveTvOutlined";
import WbSunnyOutlined from "@material-ui/icons/WbSunnyOutlined";
import React, { FC, ReactNode, useState } from "react";

import Switch from "./Switch";

type CardT = { label: string; icon: ReactNode };
type CardsT = CardT[];

const cards: CardsT = [
  {
    label: "Light",
    icon: <WbSunnyOutlined sx={{ fontSize: "2rem", color: "#769CFF" }} />,
  },
  {
    label: "TV",
    icon: <LiveTvOutlined sx={{ fontSize: "2rem", color: "#769CFF" }} />,
  },
  {
    label: "Air",
    icon: <AcUnitOutlined sx={{ fontSize: "2rem", color: "#769CFF" }} />,
  },
  {
    label: "Wi-Fi",
    icon: <CellWifiOutlined sx={{ fontSize: "2rem", color: "#769CFF" }} />,
  },
];

const Card: FC<CardT> = ({ label, icon }) => {
  const [value, setValue] = useState(false);
  return (
    <CardMaterial className="shadow-sm rounded-xl">
      <CardContent>
        <div className="flex justify-between">
          <div className="text-xl">{label}</div>
          {icon}
        </div>
        <div className="flex justify-between mt-8">
          <div className="text-base">{value ? "on" : "off"}</div>
          <Switch
            inputProps={{ "aria-label": label }}
            defaultChecked
            onChange={(event) => setValue(event.target.checked)}
          />
        </div>
      </CardContent>
    </CardMaterial>
  );
};

const Cards: FC = () => (
  <div className="grid grid-cols-2 gap-4">
    {cards.map((props) => (
      <Card {...props} />
    ))}
  </div>
);

export default Cards;
