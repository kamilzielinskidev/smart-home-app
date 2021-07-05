import { BottomNavigationActionProps, styled } from "@material-ui/core";
import BottomNavigationMaterial from "@material-ui/core/BottomNavigation";
import BottomNavigationActionMaterial from "@material-ui/core/BottomNavigationAction";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { FC, useState } from "react";

const BottomNavigationAction = styled(BottomNavigationActionMaterial)({
  ".MuiBottomNavigationAction-label": {
    fontSize: "0px!important",
  },
});

type Action = BottomNavigationActionProps;
type Actions = Action[];

const actions: Actions = [
  { label: "home", icon: <HomeIcon fontSize="large" />, disabled: false },
  { label: "group", icon: <GroupIcon fontSize="large" />, disabled: true },
  { label: "flash", icon: <FlashOnIcon fontSize="large" />, disabled: true },
  { label: "person", icon: <PersonIcon fontSize="large" />, disabled: true },
];

const BottomNavigation: FC = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigationMaterial
      className="h-16 rounded-t-xl overflow-hidden"
      showLabels
      value={value}
      onChange={(_, v) => setValue(v)}
    >
      {actions.map((props) => (
        <BottomNavigationAction key={props.label as string} {...props} />
      ))}
    </BottomNavigationMaterial>
  );
};

export default BottomNavigation;
