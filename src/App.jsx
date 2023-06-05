import "./App.css";
import { getRamaData } from "./hooks/getRamaData";
import { canciones } from "./mocks/canciones.json";
import { santacecilia } from "./mocks/santacecilia.json";
import { useRama } from "./hooks/useRama";
import { useSantas } from "./hooks/useSantas";
import { SantaCecilia } from "./components/santaCecilias/SantaCecilia";
import { useCallback, useEffect, useState } from "react";
import Songs from "./components/songs/Songs";
import debounce from "just-debounce-it";
import { useSongs } from "./hooks/useSongs";
import { useSearch } from "./hooks/useSearch";
import Ranking from "./components/ranking/Ranking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import Carousele from "./components/carousel/Carousel";

function App() {
  const { getRamaData } = useRama();
  const { search, setSearch } = useSearch();
  const [sort, setSort] = useState("Z-A");
  const { santas, getSantas, getAllSantas } = useSantas({ search, sort });
  const { songs, getSongs, getAlSongs } = useSongs({ search });

  useEffect(() => {
    getAllSantas();
    getAlSongs();
  }, []);

  const handleCancionesSubmit = (e) => {
    e.preventDefault();

    getSongs({ search });
  };
  const debouncedGetCanciones = useCallback(
    debounce((search) => {
      getSongs({ search });
    }, 300),
    []
  );
  const handleCancionesSearch = (e) => {
    const newQuery = e.target.value;
    // console.log(newQuery);
    if (newQuery.startsWith(" ")) return;
    setSearch(newQuery);
    debouncedGetCanciones(newQuery);
  };

  const debouncedGetSantas = useCallback(
    debounce((search) => {
      getSantas({ search });
    }, 300),
    []
  );
  const handleSantasSearch = (e) => {
    const newQuery = e.target.value;
    debouncedGetSantas(newQuery);
  };
  const handleSantasSort = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
  };

  // console.log({ santasSorted });
  const [rankingShow, setRankingShow] = useState(false);
  const handleShowRanking = () => {
    setRankingShow(!rankingShow);
  };
  return (
    <>
      <div className="App">
        <h1>Santa cecilia</h1>
        <Carousele />
        <button className="ranking-btn_home" onClick={handleShowRanking}>
          <FontAwesomeIcon icon={faRankingStar} />
        </button>
        {rankingShow ? (
          <section className="section_ranking-container">
            {/* <button onClick={handleShowRanking}></button> */}
            <Ranking santas={santacecilia} closeRanking={handleShowRanking} />
          </section>
        ) : (
          ""
        )}
        <div className="home_body">
          {/* SANTACECILIAS */}
          <section className="home_body_section">
            <div className=" home_body_section__head">
              <h1>Santas Cecilias</h1>
              <div>
                <input
                  type="text"
                  placeholder="Año, Campo, Rama ..."
                  autoComplete="off"
                  name="query-santas"
                  onChange={handleSantasSearch}
                />
                <button>🔍</button>
              </div>
              {/* <div className="filterSantas-container">
                <select
                  name="filterSantas"
                  id=""
                  className=""
                  onChange={handleSantasSort}
                >
                  <option value="Z-A">Z-A</option>
                  <option value="A-Z">A-Z</option>
                </select>
              </div> */}
            </div>
            <span style={{ fontStyle: "italic", margin: 0 }}>
              Resultados : {santas.length}
            </span>
            <div className="home_body_section__list">
              {santas.map((m) => (
                <SantaCecilia
                  key={m.id_sc}
                  id_santa={m.id_sc}
                  year={m.year}
                  place={m.place}
                  winner={m.winner}
                  songs={m.canciones}
                  getRamaData={getRamaData}
                />
              ))}
            </div>
          </section>

          {/* CANCIONES */}
          <section className="home_body_section">
            <div className="home_body_section__head">
              <h1>Canciones</h1>
              <form onSubmit={handleCancionesSubmit}>
                <input
                  type="text"
                  name="query"
                  value={search}
                  placeholder="Buscar cancion ... "
                  autoComplete="off"
                  onChange={handleCancionesSearch}
                />

                <button type="submit">🔍</button>
              </form>
            </div>
            <span style={{ fontStyle: "italic", margin: 0 }}>
              Resultados : {songs.length}
            </span>
            <div className="home_body_section__list">
              {songs?.map((m) => (
                <Songs
                  cancionero_home={true}
                  key={m.id_cancion}
                  name={m.title}
                  year={m.year}
                  rama_name={m.rama_name}
                  lyrics={m.lyrics}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
