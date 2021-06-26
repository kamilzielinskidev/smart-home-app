import { styled } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import TabsMaterial from "@material-ui/core/Tabs";
import { FC } from "react";

import usePickedRoomState from "../stores/pickedRoomState";
import { Room } from "../types/room";

const DottedTabs = styled(TabsMaterial)({
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
});

type TabT = { label: Room };
type TabsT = TabT[];

const tabs: TabsT = [
  { label: "Bath" },
  { label: "Living Room" },
  { label: "Bedroom" },
  { label: "Kitchen" },
];

const Tabs: FC = () => {
  const roomsMap: Room[] = ["Bath", "Bedroom", "Kitchen", "Living Room"];
  const { room, changeRoom } = usePickedRoomState();

  return (
    <DottedTabs
      value={roomsMap.findIndex((v) => v === room)}
      onChange={(_, v) => changeRoom(roomsMap[v])}
      aria-label="basic tabs example"
      variant="scrollable"
      scrollButtons="auto"
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    >
      {tabs.map((props) => (
        <Tab key={props.label} {...props} />
      ))}
    </DottedTabs>
  );
};

export default Tabs;
