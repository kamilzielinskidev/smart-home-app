import { ButtonBase, SvgIconProps } from "@material-ui/core";
import MoodOutlined from "@material-ui/icons/MoodOutlined";
import MusicNoteOutlined from "@material-ui/icons/MusicNoteOutlined";
import SentimentVeryDissatisfiedOutlined from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import SignalWifiOffOutlined from "@material-ui/icons/SignalWifiOffOutlined";
import { FC } from "react";

import { Genre } from "../types/genre";

type AirTypeBtnT = {
  type: Genre;
  isActive: boolean;
  onPick: (v: Genre) => void;
};

const genreBtnTypeToIcon: Record<Genre, FC<SvgIconProps>> = {
  Horror: SignalWifiOffOutlined,
  Comedy: MoodOutlined,
  Drama: SentimentVeryDissatisfiedOutlined,
  Music: MusicNoteOutlined,
};

const GenreBtn: FC<AirTypeBtnT> = ({ type, isActive, onPick }) => {
  const Icon = genreBtnTypeToIcon[type];
  return (
    <div>
      <ButtonBase
        className="p-6 shadow rounded-full"
        aria-label={`genre ${type}`}
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

export default GenreBtn;
