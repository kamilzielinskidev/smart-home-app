import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import { FC } from "react";

const HeaderCard: FC = () => (
  <div
    className="flex flex-col h-52 justify-center rounded-b-xl text-white"
    style={{
      background: "linear-gradient(105.17deg, #769CFF 5.66%, #384C92 99.02%)",
    }}
  >
    <div className="text-2xl font-bold text-center">Lily's Home</div>
    <div className="text-sm text-center">3 devices are active</div>
    <div className="flex mt-4 justify-around">
      <div className="flex flex-col items-center">
        <div className="text-2xl">+25&deg;C</div>
        <div className="text-xs">Indoor Temp</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl">+30&deg;C</div>
        <div className="text-xs">Outdoor Temp</div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <CloudOutlinedIcon sx={{ fontSize: "2rem" }} />
        </div>
        <div className="text-xs">Cloudy</div>
      </div>
    </div>
  </div>
);

export default HeaderCard;
