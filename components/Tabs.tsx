import { styled } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import TabsMaterial from "@material-ui/core/Tabs";
import { FC, useState } from "react";

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

type TabT = { label: string };
type TabsT = TabT[];

const tabs: TabsT = [
  { label: "Bath" },
  { label: "Living Room" },
  { label: "Bedroom" },
  { label: "Kitchen" },
];

const Tabs: FC = () => {
  const [value, setValue] = useState(0);

  return (
    <DottedTabs
      value={value}
      onChange={(_, v) => setValue(v)}
      aria-label="basic tabs example"
      variant="scrollable"
      scrollButtons="auto"
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    >
      {tabs.map((props) => (
        <Tab key={props.label} className="text-gray-400" {...props} />
      ))}
    </DottedTabs>
  );
};

export default Tabs;
