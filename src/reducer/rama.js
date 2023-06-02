export const intialState = {
  rama: [],
  rama_data: [],
};
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case "GET_RAMA_DATA":
      return {
        ...state,
        rama: actionPayload,
      };
    case "GET_ONE_RAMA_DATA":
      return {
        rama_data: actionPayload,
      };
  }
  return state;
};
