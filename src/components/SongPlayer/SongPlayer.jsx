import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./SongPlayer.css";
const SongPlayer = ({ songUrl, isPlaying, setIsPlaying }) => {
  return (
    <div className="songPlayer_container">
      <ReactPlayer
        url={songUrl}
        playing={isPlaying}
        controls={false}
        width="300px"
        height="350px"
        onEnded={() => setIsPlaying(!isPlaying)}
      />
    </div>
  );
};

export default SongPlayer;
