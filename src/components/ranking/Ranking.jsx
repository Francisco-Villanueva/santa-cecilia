import React from "react";
import "./Ranking.css";
import { ramas } from "../../mocks/ramas.json";
export default function Ranking({ santas }) {
  ramas.forEach((m) => {
    m.sc_ganados = santas.filter((santa) => santa.winner === m.idRama);
  });

  const sortedRamas_bySantas = ramas.sort(
    (a, b) => b.sc_ganados.length - a.sc_ganados.length
  );

  console.log(sortedRamas_bySantas);
  return (
    <div className="ranking-container">
      <h1>Ranking histórico</h1>
      <div className="rank-container">
        {sortedRamas_bySantas.slice(0, 8).map((m, i) => (
          <div className="rank">
            <b>{i + 1}°</b>
            <img src={m.img} />
            <div>
              <h3>{m.rama_name} </h3>
              <b>{m.sc_ganados.length}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
