import { styled } from "@material-ui/core";
import BottomNavigationMaterial from "@material-ui/core/BottomNavigation";
import BottomNavigationActionMaterial from "@material-ui/core/BottomNavigationAction";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { FC, ReactNode, useState } from "react";

const BottomNavigationAction = styled(BottomNavigationActionMaterial)({
  ".MuiBottomNavigationAction-label": {
    fontSize: "0px!important",
  },
});

type Action = { label: string; icon: ReactNode; customClass?: string };
type Actions = Action[];

const actions: Actions = [
  { label: "home", icon: <HomeIcon fontSize="large" /> },
  { label: "group", icon: <GroupIcon fontSize="large" /> },
  { label: "flash", icon: <FlashOnIcon fontSize="large" /> },
  { label: "person", icon: <PersonIcon fontSize="large" /> },
];

const BottomNavigation: FC = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigationMaterial
      className="h-20 rounded-t-xl overflow-hidden"
      showLabels
      value={value}
      onChange={(_, v) => setValue(v)}
    >
      {actions.map((props) => (
        <BottomNavigationAction key={props.label} {...props} />
      ))}
    </BottomNavigationMaterial>
  );
};

export default BottomNavigation;
