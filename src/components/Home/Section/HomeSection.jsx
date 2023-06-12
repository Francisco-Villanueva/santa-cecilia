import React, { useCallback, useState } from "react";
import { SantaCecilia } from "../../santaCecilias/SantaCecilia";
import Songs from "../../songs/Songs";
import debounce from "just-debounce-it";
import { useSongPlaying } from "../../../hooks/useSongPlaying";

function Searcher({ search, setSearch, type, getSantas, getSongs }) {
  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === "santas") {
      getSantas({ search });
    }
    if (type === "canciones") {
      getSongs({ search });
    }
  };

  const deboucedSearch = useCallback(
    debounce((search, type) => {
      if (type === "santas") getSantas({ search });
      if (type === "canciones") getSongs({ search });
    }, 300),
    []
  );
  const handleSearch = (e, type) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    setSearch(newQuery);
    deboucedSearch(newQuery, type);
  };

  return { handleSubmit, handleSearch };
}
export default function HomeSection({
  title,
  type,
  getRamaData,
  array,
  getSantas,
  getSongs,
  search,
  setSearch,
}) {
  const { handleSubmit, handleSearch } = Searcher({
    search,
    setSearch,
    type,
    getSantas,
    getSongs,
  });
  const [santasLong, setSantasLong] = useState({
    long: 5,
    open: false,
  });
  const [songsLong, setSongsLong] = useState({
    long: 7,
    open: false,
  });
  const handleShowMoreList = (tipo, arr) => {
    if (tipo === "santas") {
      !santasLong.open
        ? setSantasLong({ long: arr.length, open: true })
        : setSantasLong({ long: 5, open: false });
    } else {
      !songsLong.open
        ? setSongsLong({ long: arr.length, open: true })
        : setSongsLong({ long: 7, open: false });
    }
  };

  return (
    <div className="home_body_section">
      <div className="home_body_section__head">
        <div className="home_body_section__head-child_1">
          <h1>{title}</h1>
          <form onSubmit={() => handleSubmit(type)}>
            <input
              type="text"
              placeholder="Año, Campo, Rama ..."
              autoComplete="off"
              name="query-santas"
              onChange={(e) => handleSearch(e, type)}
            />
            <button type="submit">🔍</button>
          </form>
        </div>
        {/*
   |----------------->  FILTROS :
   |           <div className="filterSantas-container">
   |             <select
   |               name="filterSantas"
   |               id=""
   |               className=""
   |               onChange={handleSantasSort}
   |             >
   |               <option value="Z-A">Z-A</option>
   |               <option value="A-Z">A-Z</option>
   |             </select>
   |           </div>
   |
   |----------------->  FILTROS :
   */}
        <div className="home_body_section__head-child_1">
          <span style={{ fontStyle: "italic", margin: 0 }}>
            Resultados : {array.length}
          </span>
        </div>
      </div>
      <div className="home_body_section__list">
        {type === "santas"
          ? array
              .slice(0, santasLong.long)
              .map((m) => (
                <SantaCecilia
                  key={m.id_sc}
                  id_santa={m.id_sc}
                  year={m.year}
                  place={m.place}
                  winner={m.winner}
                  songs={m.canciones}
                  getRamaData={getRamaData}
                />
              ))
          : array
              .slice(0, songsLong.long)
              .map((m) => (
                <Songs
                  cancionero_home={true}
                  key={m.id_cancion}
                  name={m.title}
                  year={m.year}
                  rama_name={m.rama_name}
                  lyrics={m.lyrics}
                  sound={m.sound}
                  fullSongData={m}
                />
              ))}
      </div>
      <button
        className="btn_showMore"
        onClick={() => handleShowMoreList(type, array)}
      >
        {type === "santas"
          ? santasLong.open
            ? "mostrar menos.."
            : "mostar mas.."
          : songsLong.open
          ? "mostrar menos.."
          : "mostar mas.."}
      </button>
    </div>
  );
}
