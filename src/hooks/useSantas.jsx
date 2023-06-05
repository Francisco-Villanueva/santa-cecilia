import { useCallback, useMemo, useRef, useState } from "react";
// import { SantaContext } from "../context/santacecilia";
import { santacecilia } from "../mocks/santacecilia.json";
import { searchSanta } from "../services/santas";

export function useSantas({ search, sort }) {
  console.log("sort ", sort);
  const [santas, setSantas] = useState([]);

  const prevSearch = useRef(search);

  const getSantas = useCallback(({ search }) => {
    if (search === prevSearch.current) return;

    prevSearch.current = search;
    const newSantas = searchSanta({ search });
    setSantas(newSantas);
  }, []);

  const getAllSantas = useCallback(() => {
    setSantas(santacecilia);
  }, [search]);

  console.log({ santas });
  const sortedSantas = useMemo(() => {
    if (sort === "A-Z") return [...santas].sort((a, b) => a.year - b.year);
    else {
      return [...santas].sort((a, b) => b.year - a.year);
    }
  }, [sort, santas]);

  return { santas: sortedSantas, getSantas, getAllSantas };
}
