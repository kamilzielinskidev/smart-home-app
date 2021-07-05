import { FC } from "react";

import BottomNavigation from "../components/BottomNavigation";
import Cards from "../components/Cards";
import GeneralInformations from "../components/GeneralInformations";
import HeaderCard from "../components/HeaderCard";
import SectionHeader from "../components/SectionHeader";
import Tabs from "../components/Tabs";

const Home: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0">
        <HeaderCard />
      </div>
      <div className="flex-grow flex-shrink overflow-scroll">
        <Tabs />
        <div className="mx-5 mt-5">
          <SectionHeader title={"Devices"} buttonLabel={"+add device"} />
          <Cards />
        </div>
        <div className="mx-5 mt-5 mb-5">
          <SectionHeader
            title={"General information"}
            buttonLabel={"See all"}
          />
          <GeneralInformations />
        </div>
      </div>
      <div className="flex-shrink-0">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Home;
