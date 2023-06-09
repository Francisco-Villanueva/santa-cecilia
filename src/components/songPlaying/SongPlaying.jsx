import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SongPlaying.css";
import React, { useState } from "react";
import { faCirclePlay, faExpand } from "@fortawesome/free-solid-svg-icons";
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
  song,
  isPlaying,
  ramas,
  rama_name,
  setIsPlaying,
}) {
  const [expand, setExpand] = useState(false);
  const handleExpandSong = () => {
    // setExpand(!expand);
  };
  const { setPlayPause } = useSongPlaying();
  const author = ramas.filter((e) => e.rama_name === rama_name);

  return expand ? (
    <SongPlayingExpanded
      song={song}
      author={author}
      handleExpandSong={handleExpandSong}
    />
  ) : (
    <div
      className={
        isPlaying
          ? "songPlaying_container entrance"
          : "songPlaying_container exit"
      }
    >
      <button className="expand_songPlaying" onClick={handleExpandSong}>
        <FontAwesomeIcon icon={faExpand} />
      </button>
      <span>reproduciendo..</span>
      <div>
        <button onClick={() => setPlayPause()}>
          <FontAwesomeIcon icon={faCirclePlay} />
        </button>
        <b>{song} </b>
      </div>
    </div>
  );
}
