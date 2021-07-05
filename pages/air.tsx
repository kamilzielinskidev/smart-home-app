import { FC } from "react";

import AirTypeBtns from "../components/AirTypeBtns";
import Humidification from "../components/Humidification";
import Knob from "../components/Knob";
import OnOffSwitch from "../components/OnOffSwitch";
import SliderSection from "../components/SliderSection";
import Tabs from "../components/Tabs";
import TopNavigation from "../components/TopNavigation";

const Air: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <TopNavigation title={"Air"} />
      <Tabs />
      <div className="overflow-scroll">
        <div className="mt-5 mx-5 flex justify-end">
          <OnOffSwitch />
        </div>
        <div className="mt-5 flex justify-center">
          <Knob />
        </div>
        <div className="mt-5 mx-5">
          <AirTypeBtns />
        </div>
        <div className="mt-5">
          <SliderSection label={"Fan speed"} />
        </div>
        <div className="mt-5 mx-5 mb-5">
          <Humidification />
        </div>
      </div>
    </div>
  );
};

export default Air;
