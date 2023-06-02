import "./App.css";
import { getRamaData } from "./hooks/getRamaData";
import { canciones } from "./mocks/canciones.json";
import { santacecilia } from "./mocks/santacecilia.json";
import { useRama } from "./hooks/useRama";
import { useSantas } from "./hooks/useSantas";
import { SantaCecilia } from "./components/santaCecilias/SantaCecilia";
import { useCallback, useEffect } from "react";
import Songs from "./components/songs/Songs";
import debounce from "just-debounce-it";
import { useSongs } from "./hooks/useSongs";
import { useSearch } from "./hooks/useSearch";
import Ranking from "./components/ranking/Ranking";
function App() {
  const { getRamaData } = useRama();
  const { santas, getAllSantas } = useSantas();
  const { search, setSearch } = useSearch();
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
    console.log(newQuery);
    if (newQuery.startsWith(" ")) return;
    setSearch(newQuery);
    debouncedGetCanciones(newQuery);
  };
  console.log(santas.santas);
  const santasSorted = santas.santas.sort((a, b) => b.year - a.year);
  console.log({ santasSorted });
  return (
    <>
      <div className="App">
        <h1>Santa cecilia</h1>

        <section className="ranking-container">
          <Ranking />
        </section>
        <div className="home_body">
          <section className="santa_cecilias home_body_section">
            <div className=" home_body_section__head">
              <h1>Santas Cecilias</h1>
              <div>
                <input type="text" placeholder="Año, Campo, Rama ..." />
                <button>🔍</button>
              </div>
            </div>
            <div className="home_body_section__list">
              {santasSorted.map((m) => (
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

          <section className=" home_body_section">
            <div className="home_body_section__head">
              <h1>Canciones</h1>
              <form onSubmit={handleCancionesSubmit}>
                <input
                  type="text"
                  name="query"
                  value={search}
                  placeholder="Buscar cancion ... "
                  onChange={handleCancionesSearch}
                />

                <button type="submit">🔍</button>
              </form>
            </div>
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
