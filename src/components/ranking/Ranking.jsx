import React from "react";
import "./Ranking.css";
import {ramas} from '../../mocks/ramas.json'
export default function Ranking({ santas }) {
  // console.log(santas === santacecilia);
  console.log('RAMAS 1',{ramas});

  const santasFilterRover = santas.filter((santa) => santa.winner === "id_rovers");

  console.log("santasFilterRover", santasFilterRover);
  // Recorrer el arreglo "santacecilias"
for (let i = 0; i < santas.length; i++) {
  const santaCecilia = santas[i];

  // Buscar la rama ganadora en el arreglo "ramas"
  const ramaGanadora = ramas.find(rama => rama.idRama === santaCecilia.winner);

  // Verificar si se encontró la rama ganadora
  if (ramaGanadora) {
    // Obtener la cantidad de competencias ganadas actual
    let competenciasGanadas = ramaGanadora.sc_ganados.length;

    // Actualizar la propiedad "sc_ganados" de la rama ganadora
    ramaGanadora.sc_ganados = [...ramaGanadora.sc_ganados, competenciasGanadas + 1];
  }
}

  

  
  return <div>Ranking</div>;
}
