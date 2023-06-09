import React, { useCallback } from "react";
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

  const { song, reproductionStatus } = useSongPlaying();
  // console.log({ song, reproductionStatus });
  return (
    <div className="home_body_section">
      <div className=" home_body_section__head">
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
      </div>
      <span style={{ fontStyle: "italic", margin: 0 }}>
        Resultados : {array.length}
      </span>
      <div className="home_body_section__list">
        {type == "santas"
          ? array.map((m) => (
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
          : array.map((m) => (
              <Songs
                cancionero_home={true}
                key={m.id_cancion}
                name={m.title}
                year={m.year}
                rama_name={m.rama_name}
                lyrics={m.lyrics}
                sound={m.sound}
              />
            ))}
      </div>
    </div>
  );
}
