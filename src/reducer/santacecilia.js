import { santacecilia } from "../mocks/santacecilia.json";

export const intialState = {
  santas: [],
};

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "GET_ALL_SANTAS": {
      return {
        ...state,
        santas: actionPayload,
      };
    }
  }
  return state;
};
