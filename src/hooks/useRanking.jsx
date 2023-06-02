import { santacecilia } from "../mocks/santacecilia.json";
import { ramas } from "../mocks/ramas.json";

export function useRanking() {
  const ranking = ramas.map((m) => ({
    idRama: m.idRama,
    scGanados: m.sc_ganados,
    nameRama: m.rama_name,
    imgRama: m.img,
  }));

  return { ranking };
}
