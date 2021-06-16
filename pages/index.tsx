import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { FC, useState } from "react";

const Home: FC = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex flex-col h-full">
      <div
        className="flex flex-col h-52 justify-center rounded-t-3xl rounded-b-xl text-white"
        style={{
          background:
            "linear-gradient(105.17deg, #769CFF 5.66%, #384C92 99.02%)",
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
      <div className="flex-grow">
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
          }}
          sx={{
            ".MuiTabs-indicator": {
              display: "flex",
              height: "5px",
              justifyContent: "center",
              backgroundColor: "transparent",
              bottom: "5px",
            },
            ".MuiTabs-indicatorSpan": {
              height: "5px",
              width: "5px",
              borderRadius: "50%",
              backgroundColor: "#769CFF",
            },
          }}
        >
          <Tab className="text-gray-400" label="Bath" />
          <Tab className="text-gray-400" label="Living Room" />
          <Tab className="text-gray-400" label="Bedroom" />
          <Tab className="text-gray-400" label="Kitchen" />
        </Tabs>
      </div>
      <BottomNavigation
        className="h-20 rounded-t-xl rounded-b-3xl"
        showLabels
        value={0}
      >
        <BottomNavigationAction
          className="rounded-bl-3xl rounded-tl-xl"
          icon={<HomeIcon fontSize="large" />}
        />
        <BottomNavigationAction icon={<GroupIcon fontSize="large" />} />
        <BottomNavigationAction icon={<FlashOnIcon fontSize="large" />} />

        <BottomNavigationAction
          className="rounded-br-3xl rounded-tr-xl"
          icon={<PersonIcon fontSize="large" />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Home;
