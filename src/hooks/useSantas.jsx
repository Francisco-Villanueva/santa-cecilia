import { useContext } from "react";
import { SantaContext } from "../context/santacecilia";

export function useSantas() {
  const context = useContext(SantaContext);
  return context;
}
