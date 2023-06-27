import { useRef, useState, useCallback, useMemo } from "react";
import { searchSongs } from "../services/canciones";
import { searchSanta } from "../services/santas";
import { canciones } from "../mocks/canciones.json";
export function useSongs({ search, sort }) {
  const [songs, setSongs] = useState([]);

  const prevSearch = useRef(search);

  const getSongs = useCallback(({ search }) => {
    if (search === prevSearch.current) return;
    prevSearch.current = search;
    const newSongs = searchSongs({ search });
    setSongs(newSongs);
  }, []);

  const getAlSongs = useCallback(() => {
    setSongs(canciones);
  }, [search]);

  const sortedSongs = useMemo(() => {
    //funcion para ordernar las canciones segun lo que se pida

    if (sort === "A-Z") {
      return [...songs].sort((a, b) => a.year - b.year);
    }else {
      return [...songs].sort((a, b) => b.year - a.year);

    }

  }, [sort, songs]);

  return { songs: sortedSongs, getSongs, getAlSongs };
}
