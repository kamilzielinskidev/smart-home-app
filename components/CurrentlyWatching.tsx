import Image from "next/image";
import { FC } from "react";

import LinearProgress from "../components/LinearProgress";

const CurrentlyWatching: FC = () => (
  <div className="flex">
    <div className="flex-shrink-0 flex-grow-0">
      <Image
        className="rounded-xl"
        src="https://images.unsplash.com/photo-1618426257457-0bc6cfa2de33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64&q=50"
        alt="Dracula movie cover"
        width={64}
        height={64}
      ></Image>
    </div>
    <div className="ml-4 flex-grow">
      <div className="text-base font-semibold">Dracula</div>
      <div className="text-sm" style={{ color: "#769CFF" }}>
        Bram Stacker
      </div>
      <div className="mt-4">
        <LinearProgress
          aria-label="movie progress bar"
          aria-busy="true"
          variant="determinate"
          value={60}
        />
      </div>
    </div>
  </div>
);

export default CurrentlyWatching;
