import { configureStore } from "@reduxjs/toolkit";
import anagraficaDsoReducer from "./reducers/anagrafica-dso-reducer";

export const store = configureStore({
  reducer: {
    anagraficaDso: anagraficaDsoReducer,
  },
});