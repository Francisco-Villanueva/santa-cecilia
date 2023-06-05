import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./SongPlayer.css";
const SongPlayer = ({ songUrl, isPlaying }) => {
  return (
    <div className="songPlayer_container">
      <p className={isPlaying ? "vibrate-1" : ""}>... </p>
      <ReactPlayer
        url={songUrl}
        playing={isPlaying}
        controls={true}
        width="300px"
        height="350px"
      />
    </div>
  );
};

export default SongPlayer;
