import { useRef, useState, useMemo, useCallback } from "react";
import { searchSongs } from "../services/canciones";
import { canciones } from "../mocks/canciones.json";
export function useSongs({ search }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  const sortedSongs = () => {
    //funcion para ordernar las canciones segun lo que se pida
  };

  return { songs, getSongs, getAlSongs };
}
