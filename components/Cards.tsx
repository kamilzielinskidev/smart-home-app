import { SvgIconProps } from "@material-ui/core";
import CardMaterial from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AcUnitOutlined from "@material-ui/icons/AcUnitOutlined";
import CellWifiOutlined from "@material-ui/icons/CellWifiOutlined";
import LiveTvOutlined from "@material-ui/icons/LiveTvOutlined";
import WbSunnyOutlined from "@material-ui/icons/WbSunnyOutlined";
import { useRouter } from "next/dist/client/router";
import React, { FC, useState } from "react";

import Switch from "./Switch";

type CardT = {
  defaultValue: boolean;
  icon: FC<SvgIconProps>;
  isAvailable: boolean;
  label: string;
  link?: string;
};
type CardsT = CardT[];

const cards: CardsT = [
  {
    defaultValue: false,
    icon: WbSunnyOutlined,
    isAvailable: false,
    label: "Light",
  },
  {
    defaultValue: false,
    icon: LiveTvOutlined,
    isAvailable: false,
    label: "TV",
  },
  {
    defaultValue: true,
    icon: AcUnitOutlined,
    isAvailable: true,
    label: "Air",
    link: "/air",
  },
  {
    defaultValue: false,
    icon: CellWifiOutlined,
    isAvailable: false,
    label: "Wi-Fi",
  },
];

const Card: FC<CardT> = ({
  label,
  icon: Icon,
  isAvailable,
  link,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);
  const router = useRouter();

  return (
    <div style={{ position: "relative" }}>
      <CardMaterial
        className={
          isAvailable
            ? `shadow rounded-xl cursor-pointer hover:bg-gray-100 active:bg-gray-200`
            : "shadow rounded-xl"
        }
        style={{ border: isAvailable ? "2px solid #769CFF" : "none" }}
        onClick={() => isAvailable && link && router.push(link)}
      >
        <CardContent sx={{ color: isAvailable ? "#000" : "#9ea5b0" }}>
          <div className="flex justify-between">
            <div className="text-xl">{label}</div>
            <Icon
              sx={{
                fontSize: "2rem",
                color: isAvailable ? "#769CFF" : "#9ea5b0",
              }}
            />
          </div>
          <div className="flex justify-between mt-8 text-base">
            {value ? "on" : "off"}
          </div>
        </CardContent>
      </CardMaterial>
      <Switch
        sx={{ position: "absolute", bottom: 24, right: 20 }}
        inputProps={{ "aria-label": label }}
        checked={value}
        onClick={(e) => e.stopPropagation()}
        disabled={!isAvailable}
        onChange={(event) => setValue(event.target.checked)}
      />
    </div>
  );
};

const Cards: FC = () => (
  <div className="grid grid-cols-2 gap-4">
    {cards.map((props) => (
      <Card key={props.label} {...props} />
    ))}
  </div>
);

export default Cards;
