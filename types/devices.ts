import { Air, AirDevice } from "./devices/air";
import { DefaultDevice } from "./devices/common";
import { Light, LightDevice } from "./devices/light";
import { TV, TVDevice } from "./devices/tv";
import { Wifi, WifiDevice } from "./devices/wifi";

type DeviceType = Air | Light | TV | Wifi;
type SpecificDevices = AirDevice | LightDevice | TVDevice | WifiDevice;

type Device<
  DeviceName extends DeviceType,
  SpecificDevice extends SpecificDevices
> = Record<DeviceName, DefaultDevice & SpecificDevice>;

export type Devices =
  | Device<Air, AirDevice>
  | Device<Light, LightDevice>
  | Device<TV, TVDevice>
  | Device<Wifi, WifiDevice>;
