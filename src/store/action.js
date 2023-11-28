import { SET_WEATHER, SET_ERROR_MESSAGE, SET_RESULTS } from "./actionTypes";

export const setWeatherData = (data) => {
  return {
    type: SET_WEATHER,
    payload: data,
  };
};

export const setResultsData = (data) => {
  return {
    type: SET_RESULTS,
    payload: data,
  };
};

export const setErrorMessage = (data) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: data,
  };
};
