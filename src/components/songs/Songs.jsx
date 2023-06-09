import React, { useEffect, useState } from "react";
import { useRama } from "../../hooks/useRama";
import "./Songs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faClosedCaptioning,
  faExpandAlt,
  faLeaf,
  faPause,
  faPlay,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import SongPlayer from "../SongPlayer/SongPlayer";
import SongPlaying from "../songPlaying/SongPlaying";
import { ramas } from "../../mocks/ramas.json";
import { useSongPlaying } from "../../hooks/useSongPlaying";

function SongInSantaList({ name, rama_name }) {
  return (
    <div className={"songs-container"}>
      <b>{name ? name : ".."}</b>
      <p> {rama_name}</p>
    </div>
  );
}

function SongsInHome({ name, rama_name, year, lyrics, pos, sound, SongData }) {
  const [showLyrics, setShowLyirics] = useState(false);
  const [expnadLyrics, setExpandLyrics] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { song, getSong, setPlayPause, reproductionStatus } = useSongPlaying();
  const handleExpnadLyrics = () => {
    setExpandLyrics(!expnadLyrics);
  };
  const handlePlayPause = () => {
    if (song === "") {
      getSong(SongData);
      setPlayPause("");
    } else {
      getSong(SongData);
      setPlayPause(song);
    }
    // console.log("ava");
    // setPlayPause(song);
  };
  const handleShowLyrics = () => {
    setShowLyirics(!showLyrics);
  };

  return (
    <div className="songs-container-home-main">
      {song.title === name ? (
        <SongPlaying
          songName={name}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          rama_name={rama_name}
          ramas={ramas}
        />
      ) : (
        ""
      )}

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
            className={
              song.title === name && reproductionStatus
                ? "song_play"
                : "song_pause"
            }
            disabled={!sound}
          >
            {song.title === name && reproductionStatus ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
        </div>
      </div>
      <div className={showLyrics ? "lyrics" : "lyrics-hide"}>
        <button onClick={handleExpnadLyrics} className="btn-toExpandLyrics">
          <FontAwesomeIcon icon={faExpandAlt} />
        </button>
        {expnadLyrics && (
          <div className="expanded_lyrics">
            <button onClick={handleExpnadLyrics} className="btn-toCloseLyrics">
              <FontAwesomeIcon icon={faClose} />
            </button>
            <h1>{name}</h1>
            <div className="expanded_lyrics__lyrics-cont">
              <pre> {lyrics} </pre>
            </div>
          </div>
        )}
        <pre> {lyrics} </pre>
      </div>
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
  sound,
  fullSongData,
}) {
  return cancionero_home ? (
    <SongsInHome
      name={name}
      rama_name={rama_name}
      year={year}
      pos={pos}
      lyrics={lyrics}
      sound={sound}
      SongData={fullSongData}
    />
  ) : (
    <SongInSantaList name={name} rama_name={rama_name} />
  );
}
