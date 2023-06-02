import { useContext } from "react";
import { RamaContext } from "../context/rama";

export function useRama() {
  const context = useContext(RamaContext);
  return context;
}
