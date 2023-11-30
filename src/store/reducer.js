import { SET_WEATHER } from "./actionTypes";
import { SET_ERROR_MESSAGE } from "./actionTypes";
import { SET_RESULTS } from "./actionTypes";

const initialState = {
  weather: null,
  errorMessage: null,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case SET_RESULTS:
      const filteredResults = state.results.filter(
        (item) => item.id != action.payload.id
      );
      return {
        ...state,
        results: [...filteredResults, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
