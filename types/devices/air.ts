export type Air = "Air";

type Type = "Cool" | "Heat" | "Dry" | "Auto";

export type AirDevice = {
  temp: number;
  type: Type;
  funSpeed: number;
  humidification: boolean;
};
