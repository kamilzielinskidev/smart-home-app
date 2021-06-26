import IconButton from "@material-ui/core/IconButton";
import ArrowBackOutlined from "@material-ui/icons/ArrowBackOutlined";
import { useRouter } from "next/dist/client/router";
import { FC, useState } from "react";

import Knob from "../components/Knob";
import Switch from "../components/Switch";
import Tabs from "../components/Tabs";

const Air: FC = () => {
  const router = useRouter();
  const [value, setValue] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="mt-2 relative">
        <IconButton
          onClick={router.back}
          aria-label="back"
          color="primary"
          className="p-0 absolute top-2/4 left-2 transform -translate-y-1/2"
        >
          <ArrowBackOutlined />
        </IconButton>
        <div className="text-center text-2xl font-semibold">Air</div>
      </div>
      <div>
        <Tabs />
      </div>
      <div className="mt-6 mx-6 text-right">
        <span className="text-base">{value ? "on" : "off"}</span>
        <Switch
          className="ml-2"
          inputProps={{ "aria-label": "airSwitch" }}
          checked={value}
          onClick={(e) => e.stopPropagation()}
          onChange={(event) => setValue(event.target.checked)}
        />
      </div>
      <div className="mt-6 flex justify-center">
        <Knob />
      </div>
    </div>
  );
};

export default Air;
