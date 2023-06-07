import { santacecilia } from "../mocks/santacecilia.json";
// SANTACECILIA=
// {
//   "id_sc": "sc_1882",
//   "year": 1882,
//   "canciones": [
//     {
//       "id_cancion": 1,
//       "title": "CANCION DE LOS VEINTE AÑOS",
//       "year": "1882",
//       "idAuthor": "id_caminantes",
//       "rama_name": "Caminantes",
//       "idSantaCecilia": "sc_1882",
//       "lyrics": "",
//       "place": "recovecos"
//     },
//     {
//       "id_cancion": 2,
//       "title": "GRACIAS ISAIAS POR LAS LENTEJAS",
//       "year": "1882",
//       "idAuthor": "id_rovers",
//       "rama_name": "Rovers",
//       "idSantaCecilia": "sc_1882",
//       "lyrics": "",
//       "place": "recovecos"
//     }
//   ],
//   "winner": "..",
//   "place": "recovecos"
// },
export const searchSanta = ({ search }) => {
  if (search === "") return santacecilia;

  const condition = (container, toSearch) => {
    container = container.toLowerCase();
    toSearch = toSearch.toLowerCase();

    if (toSearch.length < 2) {
      return container.slice(0, toSearch.length) === toSearch;
    }
    return container.includes(toSearch);
  };

  const filteredSantas = santacecilia.filter((e) => condition(e.place, search));

  // console.log("EJECTUA SEARCH SANTA: ", filteredSantas);
  return filteredSantas;
};
