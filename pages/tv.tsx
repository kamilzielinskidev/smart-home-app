import Button from "@material-ui/core/Button";
import Image from "next/image";
import { FC, useState } from "react";

import GenreBtn from "../components/GenreBtn";
import LinearProgress from "../components/LinearProgress";
import Slider from "../components/Slider";
import Switch from "../components/Switch";
import Tabs from "../components/Tabs";
import TopNavigation from "../components/TopNavigation";
import { Genre } from "../types/genre";

const genres: Genre[] = ["Horror", "Drama", "Comedy", "Music"];

const TV: FC = () => {
  const [value, setValue] = useState(false);
  const [sound, setSound] = useState(5);
  const [genre, setGenre] = useState<Genre>("Comedy");

  return (
    <div className="flex flex-col h-full">
      <TopNavigation title={"TV"} />
      <Tabs />
      <div className="overflow-scroll">
        <div className="mt-5 mx-5 text-right">
          <span className="text-base">{value ? "on" : "off"}</span>
          <Switch
            className="ml-2"
            inputProps={{ "aria-label": "tv switch" }}
            checked={value}
            onChange={(event) => setValue(event.target.checked)}
          />
        </div>
        <div className="mt-5">
          <div className="mx-5 font-semibold text-xl">Sound</div>
          <div className="mx-7">
            <Slider
              min={0}
              max={10}
              value={sound}
              onChange={(_, v) => setSound(v as number)}
              aria-label="sound slider"
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
        <div className="mt-5 mx-5">
          <div className="flex justify-between">
            <div className="font-semibold text-xl">Genres</div>
            <Button disableRipple>See all</Button>
          </div>
          <div className="mt-1 flex justify-between">
            {genres.map((type, i) => (
              <GenreBtn
                key={type}
                type={type}
                onPick={setGenre}
                isActive={genre === type}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 mx-5 mb-5">
          <div className="flex justify-between">
            <div className="font-semibold text-xl">Today You Look</div>
            <Button disableRipple>See all</Button>
          </div>
          <div className="mt-1 flex">
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
        </div>
      </div>
    </div>
  );
};

export default TV;
