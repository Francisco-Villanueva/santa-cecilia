import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SongPlaying.css";
import React, { useState } from "react";
import {
  faCirclePlay,
  faExpand,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useSongPlaying } from "../../hooks/useSongPlaying";

function SongPlayingExpanded({ song, author, handleExpandSong }) {
  // console.log({ author });
  return (
    <div className="songPlaying_expanded scale-in-bl">
      <button className="expand_songPlaying" onClick={handleExpandSong}>
        <FontAwesomeIcon icon={faExpand} />
      </button>
      <img src={author[0].img} alt="" />
      <h3>{song}</h3>
      <b>{author[0].rama_name} </b>
    </div>
  );
}
export default function SongPlaying({
  songName,
  isPlaying,
  ramas,
  rama_name,
  setIsPlaying,
}) {
  const [expand, setExpand] = useState(false);
  const handleExpandSong = () => {
    // setExpand(!expand);
  };
  const { song, setPlayPause, reproductionStatus } = useSongPlaying();
  const author = ramas.filter((e) => e.rama_name === rama_name);

  return expand ? (
    <SongPlayingExpanded
      song={songName}
      author={author}
      handleExpandSong={handleExpandSong}
    />
  ) : (
    <div className="songPlaying_container entrance">
      <button className="expand_songPlaying" onClick={handleExpandSong}>
        <FontAwesomeIcon icon={faExpand} />
      </button>
      <span>reproduciendo..</span>
      <div>
        <button onClick={() => setPlayPause(song)}>
          {!reproductionStatus ? (
            <FontAwesomeIcon icon={faCirclePlay} style={{ color: "white" }} />
          ) : (
            <FontAwesomeIcon icon={faPauseCircle} style={{ color: "green" }} />
          )}
        </button>
        <b>{songName} </b>
      </div>
    </div>
  );
}
