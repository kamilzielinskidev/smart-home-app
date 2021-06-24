import { IsOn } from "./common";

export type Air = "Air";

type Type = "Cool" | "Heat" | "Dry" | "Auto";

export type AirDevice = IsOn & {
  temp: number;
  type: Type;
  funSpeed: number;
  humidification: boolean;
};
