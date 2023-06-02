import { ramas } from "../mocks/ramas.json";

export function getRamaData(id) {
  const info = ramas.filter((e) => e.idRama === id);

  return info[0];
}
