import { createContext, useReducer } from "react";
import { reducer, intialState } from "../reducer/songPlaying";

// import { santacecilia } from "../mocks/santacecilia.json";
export const SongPlayerContext = createContext();

function useSongPlayingReducer() {
  const [state, dispatch] = useReducer(reducer, intialState);

  // console.log({ state });
  const getSong = (song) => {
    return dispatch({
      type: "GET_SONG",
      payload: song,
    });
  };
  const setPlayPause = (song) => {
    return dispatch({
      type: "SET_PLAY_PAUSE",
      payload: song,
    });
  };
  return { state, getSong, setPlayPause };
}

export function SongPlayingProvider({ children }) {
  const { state, getSong, setPlayPause } = useSongPlayingReducer();

  return (
    <SongPlayerContext.Provider
      value={{
        reproductionStatus: state.reproductionStatus,
        song: state.song,
        getSong,
        setPlayPause,
      }}
    >
      {children}
    </SongPlayerContext.Provider>
  );
}
