import { createContext, useReducer } from "react";
import { reducer, intialState } from "../reducer/santacecilia";

import { santacecilia } from "../mocks/santacecilia.json";
export const SantaContext = createContext();

function useSantaReducer() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const getAllSantas = () => {
    return dispatch({
      type: "GET_ALL_SANTAS",
      payload: santacecilia,
    });
  };
  return { state, getAllSantas };
}

export function SantaProvider({ children }) {
  const { state, getAllSantas } = useSantaReducer();

  return (
    <SantaContext.Provider value={{ santas: state, getAllSantas }}>
      {children}
    </SantaContext.Provider>
  );
}
