import { createContext, useReducer } from "react";
import { reducer, intialState } from "../reducer/rama";
import { ramas } from "../mocks/ramas.json";
export const RamaContext = createContext();

function useRamaReducer() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const getRamaData = () => {
    return dispatch({
      type: "GET_RAMA_DATA",
      payload: ramas,
    });
  };

  const getOneRamaData = (id) => {
    const data = ramas.filter((e) => e.idRama === id);

    console.log("DATA :", data[0]?.rama_name);
    return dispatch({
      type: "GET_ONE_RAMA_DATA",
      payload: data,
    });
  };
  return { state, getRamaData, getOneRamaData };
}

export function RamaProvider({ children }) {
  const { state, getRamaData, getOneRamaData } = useRamaReducer();

  return (
    <RamaContext.Provider value={{ rama: state, getRamaData, getOneRamaData }}>
      {children}
    </RamaContext.Provider>
  );
}
