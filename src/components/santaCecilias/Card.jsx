import { useState } from "react";
import "./Card.css";
import Songs from "../songs/Songs";

export function Card({ year, name, img, place, songs, id_santa }) {
  // console.log({ songs });
  const [hideList, setHideList] = useState(false);
  const toggleSongList = () => {
    setHideList(!hideList);
  };
  return (
    <div>
      <div className="card-container ">
        <div className="card_date">
          <h4>{year}</h4>
          <h2>{place}</h2>
        </div>

        <div className="card_winner">
          <img src={img} alt={name + "winner "} className="card-image " />
          <p>{name}</p>
        </div>
        <div className="card_songs">
          <button onClick={() => toggleSongList()}>
            Canciones: <b> {songs.length}</b>{" "}
          </button>
        </div>
      </div>
      <div className={hideList ? "song-list" : "song-list-hidden"}>
        {songs.map((m, i) => (
          <Songs
            pos={songs.indexOf(m)}
            key={m.id_cancion}
            name={m.title}
            year={m.year}
            rama_name={m.rama_name}
            lyrics={m.lyrics}
          />
        ))}
      </div>
    </div>
  );
}
