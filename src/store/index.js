// store.js
import weatherReducer from "./reducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    weatherReducer,
  },
});

export default store;
