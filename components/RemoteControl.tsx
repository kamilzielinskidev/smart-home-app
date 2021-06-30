import { styled } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownOutlined from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowDropUpOutlined from "@material-ui/icons/ArrowDropUpOutlined";
import SkipNextOutlined from "@material-ui/icons/SkipNextOutlined";
import SkipPreviousOutlined from "@material-ui/icons/SkipPreviousOutlined";
import { FC } from "react";

const RemoteBackground = styled("div")({
  width: 200,
  height: 200,
  borderRadius: 9999,
  background: "linear-gradient(164.65deg, #769CFF 10.77%, #4C5ACB 90.53%)",
  border: "8px solid #FFF",
  boxShadow: "0px 4px 50px rgba(71, 84, 194, 0.25)",
});

const RemoteControl: FC = () => (
  <RemoteBackground className="relative">
    <IconButton
      className="absolute left-0 top-1/2 transform -translate-y-1/2"
      aria-label="previous"
    >
      <SkipPreviousOutlined sx={{ fontSize: "2rem", color: "#FFF" }} />
    </IconButton>
    <IconButton
      className="absolute left-1/2 top-0 transform -translate-x-1/2"
      aria-label="up"
    >
      <ArrowDropUpOutlined sx={{ fontSize: "2rem", color: "#FFF" }} />
    </IconButton>
    <IconButton
      className="absolute right-0 top-1/2 transform -translate-y-1/2"
      aria-label="next"
    >
      <SkipNextOutlined sx={{ fontSize: "2rem", color: "#FFF" }} />
    </IconButton>
    <IconButton
      className="absolute left-1/2 bottom-0 transform -translate-x-1/2"
      aria-label="down"
    >
      <ArrowDropDownOutlined sx={{ fontSize: "2rem", color: "#FFF" }} />
    </IconButton>
    <div className="bg-white h-20 w-20 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <IconButton aria-label="ok" sx={{ fontSize: "1.5rem", color: "#769CFF" }}>
        OK
      </IconButton>
    </div>
  </RemoteBackground>
);

export default RemoteControl;
