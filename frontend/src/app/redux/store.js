import { configureStore } from "@reduxjs/toolkit";
import anagraficaDsoReducer from "./reducers/anagrafica-dso-reducer";
import regionSectionReducer from "./reducers/region-section-reducer";

export const store = configureStore({
  reducer: {
    anagraficaDso: anagraficaDsoReducer,
    regionSection: regionSectionReducer
  },
});