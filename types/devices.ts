import { Air, AirDevice } from "./devices/air";
import { Light } from "./devices/light";
import { TV, TVDevice } from "./devices/tv";
import { Wifi } from "./devices/wifi";

export type DeviceType = Light | TV | Air | Wifi;

export type Devices = Record<Air, AirDevice> & Record<TV, TVDevice>;
