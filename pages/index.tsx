import { FC } from "react";

import BottomNavigation from "../components/BottomNavigation";
import HeaderCard from "../components/HeaderCard";
import Tabs from "../components/Tabs";

const Home: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <HeaderCard />
      <div className="flex-grow">
        <Tabs />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;
