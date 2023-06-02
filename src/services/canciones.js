import { canciones } from "../mocks/canciones.json";

//CANCIONES
// {
//   "id_cancion": 1,
//   "title": "CANCION DE LOS VEINTE AÑOS",
//   "year": "1882",
//   "idAuthor": "id_caminantes",
//   "rama_name": "Caminantes",
//   "idSantaCecilia": "sc_1882",
//   "lyrics": "",
//   "place": "recovecos"
// }

export const searchSongs = ({ search }) => {
  if (search === "") return canciones;

  const condition = (container, toSearch) => {
    container = container.toLowerCase();
    toSearch = toSearch.toLowerCase();

    if (toSearch.length < 4) {
      return container.slice(0, toSearch.length) === toSearch;
    }
    return container.includes(toSearch);
  };
  const filteredSongs = canciones.filter((e) => condition(e.title, search));
  // console.log("search: ", search.toLowerCase());
  // console.log(" SONGS: ", canciones);
  // console.log("FILTERED SONGS: ", filteredSongs);
  return filteredSongs?.map((m) => ({
    id: m.idAuthor,
    title: m.title,
    rama_name: m.rama_name,
    year: m.year,
    idSantaCecilia: m.idSantaCecilia,
    id_cancion: m.id_cancion,
  }));
};
