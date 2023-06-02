import React, { useEffect } from "react";
import { useRama } from "../../hooks/useRama";
import "./Songs.css";

function SongInSantaList({ name, rama_name }) {
  return (
    <div className={"songs-container"}>
      <b>{name}</b>
      <p> {rama_name}</p>
    </div>
  );
}
function SongsInHome({ name, rama_name, year, pos }) {
  return (
    <div className={"songs-container-home"}>
      <span>{pos}</span>
      <b>{name}</b>

      <p> {rama_name}</p>
      <p>{year}</p>
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
    <SongsInHome name={name} rama_name={rama_name} year={year} pos={pos} />
  ) : (
    <SongInSantaList name={name} rama_name={rama_name} />
  );
}
