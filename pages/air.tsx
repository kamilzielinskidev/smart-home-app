import { FC, useState } from "react";

import AirTypeBtn from "../components/AirTypeBtn";
import Knob from "../components/Knob";
import Slider from "../components/Slider";
import Switch from "../components/Switch";
import Tabs from "../components/Tabs";
import TopNavigation from "../components/TopNavigation";
import { AirType } from "../types/airType";

const airTypeBtns: AirType[] = ["Auto", "Cool", "Dry", "Hot"];

const Air: FC = () => {
  const [value, setValue] = useState(false);
  const [airType, changeAirType] = useState<AirType>("Auto");
  const [fanSpeed, changeFanSpeed] = useState(7);
  const [humidification, toggleHumidification] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <TopNavigation title={"Air"} />
      <div>
        <Tabs />
      </div>
      <div className="mt-6 mx-6 text-right">
        <span className="text-base">{value ? "on" : "off"}</span>
        <Switch
          className="ml-2"
          inputProps={{ "aria-label": "airSwitch" }}
          checked={value}
          onChange={(event) => setValue(event.target.checked)}
        />
      </div>
      <div className="mt-6 flex justify-center">
        <Knob />
      </div>
      <div className="mt-6 mx-6 flex justify-between">
        {airTypeBtns.map((type) => (
          <AirTypeBtn
            key={type}
            type={type}
            onPick={changeAirType}
            isActive={airType === type}
          />
        ))}
      </div>
      <div className="mt-6 mx-6">
        <div className="font-semibold text-xl">Fan speed</div>
        <Slider
          min={0}
          max={10}
          value={fanSpeed}
          onChange={(_, v) => changeFanSpeed(v as number)}
          aria-label="fan speed slider"
          marks={[
            {
              value: 0,
              label: "Min",
            },
            {
              value: 10,
              label: "Max",
            },
          ]}
        />
      </div>
      <div className="mt-6 mx-6 flex justify-between">
        <div className="font-semibold text-xl">Humidification</div>
        <div>
          <span className="text-base">{humidification ? "on" : "off"}</span>
          <Switch
            className="ml-2"
            inputProps={{ "aria-label": "humidificationSwitch" }}
            checked={humidification}
            onChange={(event) => toggleHumidification(event.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default Air;
