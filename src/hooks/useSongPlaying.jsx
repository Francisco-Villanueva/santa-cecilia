import { useContext } from "react";
import { SongPlayerContext } from "../context/songPlaying";

export function useSongPlaying() {
  const context = useContext(SongPlayerContext);
  return context;
}
