import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SongPlaying.css";
import React, { useState } from "react";
import {
  faCirclePlay,
  faExpand,
  faExpandArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function SongPlaying({ song, isPlaying }) {
  const [expand, setExpand] = useState(false);

  const handleExpandSong = () => {
    setExpand(!expand);
  };
  return (
    <div
      className={
        isPlaying
          ? expand
            ? "songPlaying_expanded scale-in-bl"
            : "songPlaying_container entrance"
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
