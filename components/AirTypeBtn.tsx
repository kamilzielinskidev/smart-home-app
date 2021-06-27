import { ButtonBase, SvgIconProps } from "@material-ui/core";
import AcUnitOutlined from "@material-ui/icons/AcUnitOutlined";
import FormatColorResetOutlined from "@material-ui/icons/FormatColorResetOutlined";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import WbSunnyOutlined from "@material-ui/icons/WbSunnyOutlined";
import { FC } from "react";

import { AirType } from "../types/airType";

type AirTypeBtnT = {
  type: AirType;
  isActive: boolean;
  onPick: (v: AirType) => void;
};

const airBtnTypeToIcon: Record<AirType, FC<SvgIconProps>> = {
  Cool: AcUnitOutlined,
  Hot: WbSunnyOutlined,
  Dry: FormatColorResetOutlined,
  Auto: SettingsOutlined,
};

const AirTypeBtn: FC<AirTypeBtnT> = ({ type, isActive, onPick }) => {
  const Icon = airBtnTypeToIcon[type];
  return (
    <div>
      <ButtonBase
        className="p-5 shadow rounded-xl"
        aria-label={`airtype ${type}`}
        onClick={() => onPick(type)}
        sx={{ backgroundColor: isActive ? "#769CFF" : "#FFF" }}
      >
        <Icon sx={{ fontSize: "2rem", color: isActive ? "#FFF" : "#769CFF" }} />
      </ButtonBase>
      <div className="text-center mt-2" style={{ color: "#769CFF" }}>
        {type}
      </div>
    </div>
  );
};

export default AirTypeBtn;
