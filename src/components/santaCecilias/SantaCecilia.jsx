import { useEffect } from "react";
import { Card } from "./Card";
import { useRama } from "../../hooks/useRama";

export function SantaCecilia({ winner, year, place, songs }) {
  const { rama, getRamaData } = useRama();
  useEffect(() => {
    getRamaData();
  }, []);

  const res = rama.rama?.length > 0 ? rama.rama : null;

  const ramaToSend = res ? res.filter((e) => e.idRama === winner) : "";

  return ramaToSend[0] ? (
    <Card
      name={ramaToSend[0]?.rama_name}
      img={ramaToSend[0]?.img}
      year={year}
      place={place}
      songs={songs}
    />
  ) : (
    ""
  );
}
