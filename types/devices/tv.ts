export type TV = "TV";

type Genres = "Horror" | "Drama" | "Comedy" | "Music";

type NowPlaying = {
  imgSrc: string;
  title: string;
  director: string;
  duration: number;
};

export type TVDevice = {
  sound: number;
  genres: Genres;
  nowPlaying: NowPlaying;
};
