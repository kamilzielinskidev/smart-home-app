import { FC } from "react";

import CurrentlyWatching from "../components/CurrentlyWatching";
import GenreBtns from "../components/GenreBtns";
import OnOffSwitch from "../components/OnOffSwitch";
import RemoteControl from "../components/RemoteControl";
import SectionHeader from "../components/SectionHeader";
import SliderSection from "../components/SliderSection";
import Tabs from "../components/Tabs";
import TopNavigation from "../components/TopNavigation";

const TV: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <TopNavigation title={"TV"} />
      <Tabs />
      <div className="overflow-scroll">
        <div className="mt-5 mx-5 flex justify-end">
          <OnOffSwitch />
        </div>
        <div className="mt-5 mx-5 flex justify-center">
          <RemoteControl />
        </div>
        <div className="mt-5">
          <SliderSection label={"Sound"} />
        </div>
        <div className="mt-5 mx-5">
          <SectionHeader title={"Genres"} buttonLabel={"see all"} />
          <GenreBtns />
        </div>
        <div className="mt-5 mx-5 mb-5">
          <SectionHeader title={"Today you watch"} buttonLabel={"see all"} />
          <CurrentlyWatching />
        </div>
      </div>
    </div>
  );
};

export default TV;
