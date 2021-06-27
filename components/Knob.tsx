import { ButtonBase, ButtonBaseProps } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { FC, useEffect, useRef, useState } from "react";
import { White } from "react-dial-knob";

type KnobWrapperT = {
  value: number;
  minVal: number;
  maxVal: number;
  onValueChange: (v: number) => void;
};

const KnobWrapper: FC<KnobWrapperT> = ({
  value,
  minVal,
  maxVal,
  onValueChange,
}) => {
  const knobWrapper = useRef<HTMLDivElement>(null);

  const [bgRemoved, changeBgRemoved] = useState(false);

  const valueToTemperature = () => {
    const valueHolderEl = knobWrapper.current?.querySelector("svg+div");
    if (valueHolderEl) valueHolderEl.innerHTML = `${value}&deg;C`;
  };

  const removeKnobG = () => {
    knobWrapper.current?.querySelector("svg g")?.remove();
    changeBgRemoved(true);
  };

  useEffect(valueToTemperature, [value]);
  useEffect(removeKnobG, []);

  return (
    <div ref={knobWrapper} hidden={!bgRemoved}>
      <White
        diameter={250}
        min={minVal}
        max={maxVal}
        step={1}
        value={value}
        theme={{
          activeNotchColor: "#769CFF",
          defaultNotchColor: "#DBE3F8",
          activeTextColor: "#769CFF",
          defaultTextColor: "#769CFF",
        }}
        onValueChange={(value) => {
          onValueChange(value);
          // here instead of in useEffect because of weird value jumping using useEffect
          valueToTemperature();
        }}
      />
    </div>
  );
};

const KnobButton: FC<ButtonBaseProps> = (props) => (
  <ButtonBase
    className="rounded-xl p-2"
    sx={{ backgroundColor: "#8EAEFF18" }}
    aria-label="increase temperature"
    {...props}
  />
);

type KnobBtnsT = {
  onIncrease: () => void;
  onDecrease: () => void;
};

const KnobBtns: FC<KnobBtnsT> = ({ onIncrease, onDecrease }) => (
  <div className="flex justify-between mx-5">
    <KnobButton onClick={onIncrease}>
      <Add sx={{ fontSize: "1.5rem" }} />
    </KnobButton>
    <KnobButton onClick={onDecrease}>
      <Remove sx={{ fontSize: "1.5rem" }} />
    </KnobButton>
  </div>
);

const Knob: FC = () => {
  const [value, setValue] = useState(20);
  const minVal = 10;
  const maxVal = 30;

  const increaseTemp = () => value < maxVal && setValue(value + 1);

  const decreaseTemp = () => value > minVal && setValue(value - 1);

  return (
    <div>
      <KnobWrapper
        value={value}
        onValueChange={setValue}
        minVal={minVal}
        maxVal={maxVal}
      />
      <KnobBtns onIncrease={increaseTemp} onDecrease={decreaseTemp} />
    </div>
  );
};

export default Knob;
