import create from "zustand";

import { Room } from "../types/room";

type RoomState = {
  room: Room;
  changeRoom: (room: Room) => void;
};

const usePickedRoomState = create<RoomState>((set) => ({
  room: "Bath",
  changeRoom: (room: Room) => set({ room }),
}));

export default usePickedRoomState;
