export const intialState = {
  song: "",
  reproductionStatus: false,
};
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "GET_SONG":
      return {
        song: actionPayload,
      };
    case "SET_PLAY_PAUSE":
      const prevSong = actionPayload;
      const newSong = state.song;
      console.log("are equal songs? ", prevSong === newSong);

      return {
        ...state,
        reproductionStatus: state.reproductionStatus ? false : true,
      };
  }
  return state;
};
