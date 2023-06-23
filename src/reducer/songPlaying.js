export const intialState = {
  song: "",
  reproductionStatus: false,
};
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "GET_SONG":
      return {
        ...state,
        song: actionPayload,
      };
    case "SET_PLAY_PAUSE":
      const prevSong = actionPayload;
      const newSong = state.song;

      let res = state.reproductionStatus;
      console.log({ res });
      if (prevSong.id_cancion === newSong.id_cancion) {
        res = !res;
      } else if (prevSong === "") {
        res = true;
      } else {
        res = true;
      }
      return {
        ...state,

        reproductionStatus: res,
      };
  }
  return state;
};
