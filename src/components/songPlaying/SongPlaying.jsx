import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SongPlaying.css";
import React, { useState } from "react";
import {
  faCirclePlay,
  faExpand,
  faExpandArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

function SongPlayingExpanded({ song, author, handleExpandSong }) {
  console.log({ author });
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
export default function SongPlaying({ song, isPlaying, ramas, rama_name }) {
  const [expand, setExpand] = useState(false);
  const handleExpandSong = () => {
    setExpand(!expand);
  };

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
        <FontAwesomeIcon icon={faCirclePlay} />
        <b>{song} </b>
      </div>
    </div>
  );
}
