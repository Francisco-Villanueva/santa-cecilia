import React, { useEffect, useState } from "react";
import { useRama } from "../../hooks/useRama";
import "./Songs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faPause,
  faPlay,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import SongPlayer from "../SongPlayer/SongPlayer";
import SongPlaying from "../songPlaying/SongPlaying";
const letra =
  "Las tazas sobre el mantel \n\n" +
  "\nLa lluvia derramada \n\n" +
  "\n Un poco de miel \n\n" +
  "Un poco de miel \n\n" +
  "No basta \n\n" +
  "El eclipse no fue parcial \n\n" +
  "Y cegó nuestras miradas \n\n" +
  "Te vi que llorabas \n\n" +
  "Te vi que llorabas \n\n" +
  "Por él \n\n" +
  "Té para tres \n\n" +
  "Un sorbo de distracción \n\n" +
  "Buscando descifrarnos \n\n" +
  "No hay nada mejor \n\n" +
  "No hay nada mejor \n\n" +
  "Que casa \n\n" +
  "Té para tres \n\n";
function SongInSantaList({ name, rama_name }) {
  const [showLyrics, setShowLyrics] = useState(false);
  const showLyricsModal = () => {
    setShowLyrics(!showLyrics);
  };
  return (
    <div className={"songs-container"} onClick={showLyricsModal}>
      <b>{name ? name : ".."}</b>
      <p> {rama_name}</p>
    </div>
  );
}

function SongsInHome({ name, rama_name, year, lyrics, pos }) {
  const [showLyrics, setShowLyirics] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const handleShowLyrics = () => {
    setShowLyirics(!showLyrics);
  };

  return (
    <div className="songs-container-home-main">
      {isPlaying && <SongPlaying song={name} isPlaying={isPlaying} />}
      <div
        className={
          showLyrics
            ? "songs-container-home selected-song "
            : "songs-container-home"
        }
      >
        <span>{pos}</span>
        <b>{name ? name : ".."}</b>
        <p> {rama_name}</p>
        <p>{year}</p>
        <div className="songs_btn-container" style={{ display: "flex" }}>
          <button onClick={handleShowLyrics}>
            <FontAwesomeIcon icon={faLeaf} />
          </button>
          <button
            onClick={handlePlayPause}
            className={isPlaying ? "song_play" : "song_pause"}
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
        </div>
      </div>
      <span className={showLyrics ? "lyrics" : "lyrics-hide"}>
        <div className="songPlayer-container">
          <SongPlayer
            isPlaying={isPlaying}
            songUrl={"https://www.youtube.com/watch?v=j0Lww0JQU-Y"}
            setIsPlaying={setIsPlaying}
          />
        </div>
        <div>{letra}</div>
      </span>
    </div>
  );
}
export default function Songs({
  name,
  year,
  rama_name,
  lyrics,
  cancionero_home,
  pos,
}) {
  return cancionero_home ? (
    <SongsInHome
      name={name}
      rama_name={rama_name}
      year={year}
      pos={pos}
      lyrics={lyrics}
    />
  ) : (
    <SongInSantaList name={name} rama_name={rama_name} />
  );
}
