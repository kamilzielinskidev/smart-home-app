import { FC, useState } from "react";

import Slider from "./Slider";

type SliderSectionT = {
  label: string;
};

const SliderSection: FC<SliderSectionT> = ({ label }) => {
  const [value, setValue] = useState(5);

  const ariaLabel = `${label.toLowerCase()} slider`;

  return (
    <div>
      <div className="mx-5 font-semibold text-xl">{label}</div>
      <div className="mx-7">
        <Slider
          min={0}
          max={10}
          value={value}
          onChange={(_, v) => setValue(v as number)}
          aria-label={ariaLabel}
          marks={[
            {
              value: 0,
              label: "Min",
            },
            {
              value: 10,
              label: "Max",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SliderSection;
