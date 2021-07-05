import { FC } from "react";

import OnOffSwitch from "./OnOffSwitch";

const Humidification: FC = () => (
  <div className="flex justify-between">
    <div className="font-semibold text-xl">Humidification</div>
    <div>
      <OnOffSwitch />
    </div>
  </div>
);

export default Humidification;
