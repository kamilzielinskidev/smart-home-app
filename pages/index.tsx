import Button from "@material-ui/core/Button";
import { FC } from "react";

import BottomNavigation from "../components/BottomNavigation";
import Cards from "../components/Cards";
import GeneralInformations from "../components/GeneralInformations";
import HeaderCard from "../components/HeaderCard";
import Tabs from "../components/Tabs";

const Home: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0">
        <HeaderCard />
      </div>
      <div className="flex-grow flex-shrink overflow-scroll">
        <Tabs />
        <div className="flex justify-between mx-5 mt-3">
          <div>Devices</div> <Button disableRipple>+Add devices</Button>
        </div>
        <div className="px-5 mt-2">
          <Cards />
        </div>
        <div className="flex justify-between mx-5 mt-5">
          <div>General information</div> <Button disableRipple>See all</Button>
        </div>
        <GeneralInformations />
      </div>
      <div className="flex-shrink-0">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Home;
