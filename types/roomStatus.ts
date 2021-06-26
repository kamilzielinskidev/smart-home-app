import { Devices } from "./devices";
import { Bath, Bedroom, Kitchen, LivingRoom, Room } from "./room";

type IsPicked = { isPicked: boolean };

type SingleRoom<T extends Room> = Record<T, IsPicked & Devices>;

export type RoomStatus =
  | SingleRoom<Bath>
  | SingleRoom<Bedroom>
  | SingleRoom<LivingRoom>
  | SingleRoom<Kitchen>;
