import { FC, useState } from "react";

import Switch from "./Switch";

const OnOffSwitch: FC = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <span className="text-base">{value ? "on" : "off"}</span>
      <Switch
        className="ml-2"
        inputProps={{ "aria-label": "air switch" }}
        checked={value}
        onChange={(event) => setValue(event.target.checked)}
      />
    </div>
  );
};

export default OnOffSwitch;
