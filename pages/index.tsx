import Button from "@material-ui/core/Button";
import { FC } from "react";

import BottomNavigation from "../components/BottomNavigation";
import Cards from "../components/Cards";
import HeaderCard from "../components/HeaderCard";
import Tabs from "../components/Tabs";

const Home: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <HeaderCard />
      <div className="flex-grow">
        <Tabs />
        <div className="flex justify-between px-5 mt-3">
          <div>Devices</div> <Button disableRipple>+Add devices</Button>
        </div>
        <div className="px-5 mt-2">
          <Cards />
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;
