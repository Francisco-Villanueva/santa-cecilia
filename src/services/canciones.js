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
  if (search === "") return null;

  const filteredSongs = canciones.filter((e) => e.title === search);

  return filteredSongs?.map((m) => ({
    id: m.idAuthor,
    title: m.title,
    rama_name: m.rama_name,
    year: m.year,
    idSantaCecilia: m.idSantaCecilia,
    id_cancion: m.id_cancion,
  }));
};
