import { FC, useState } from "react";

import { Genre } from "../types/genre";
import GenreBtn from "./GenreBtn";

const genres: Genre[] = ["Horror", "Drama", "Comedy", "Music"];

const GenreBtns: FC = () => {
  const [genre, setGenre] = useState<Genre>("Comedy");

  return (
    <div className="flex justify-between">
      {genres.map((type, i) => (
        <GenreBtn
          key={type}
          type={type}
          onPick={setGenre}
          isActive={genre === type}
        />
      ))}
    </div>
  );
};

export default GenreBtns;
