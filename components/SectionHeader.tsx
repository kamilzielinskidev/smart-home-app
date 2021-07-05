import Button from "@material-ui/core/Button";
import { FC } from "react";

type SectionHeaderT = {
  title: string;
  buttonLabel: string;
};

const SectionHeader: FC<SectionHeaderT> = ({ title, buttonLabel }) => (
  <div className="flex justify-between">
    <div className="font-semibold text-xl">{title}</div>
    <Button disableRipple>{buttonLabel}</Button>
  </div>
);

export default SectionHeader;
