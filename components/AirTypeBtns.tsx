import { FC, useState } from "react";

import { AirType } from "../types/airType";
import AirTypeBtn from "./AirTypeBtn";

const airTypeBtns: AirType[] = ["Auto", "Cool", "Dry", "Hot"];

const AirTypeBtns: FC = () => {
  const [airType, changeAirType] = useState<AirType>("Auto");

  return (
    <div className="flex justify-between">
      {airTypeBtns.map((type) => (
        <AirTypeBtn
          key={type}
          type={type}
          onPick={changeAirType}
          isActive={airType === type}
        />
      ))}
    </div>
  );
};

export default AirTypeBtns;
