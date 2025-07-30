import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  dealerData: [],
  carModels: [],
  carSlots: [],
  selectedModel: null,
};

const anagraficaDsoSlice = createSlice({
  name: "anagraficaDso",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.dealerData = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    saveCarModels: (state, action) => {
      state.carModels = action.payload;
    },
    saveCarSlots: (state, action) => {
      state.carSlots = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    }
    
  },
});

const { saveData, setLoading, setError, saveCarModels, saveCarSlots, setSelectedModel } =
  anagraficaDsoSlice.actions;
const { reducer } = anagraficaDsoSlice;

export const getDealerData = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get("/api/dealerData");
    dispatch(saveData(response.data));
    getCarModels()(dispatch, getState);
    console.log("Dealer Data:", response.data);
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
export const getCarModels = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const data = getState().anagraficaDso.dealerData.db_response;

    const seenModels = new Set();
    const uniqueModels = [];

    data.forEach((car) => {
      if (!seenModels.has(car.model)) {
        seenModels.add(car.model);
        uniqueModels.push(car.model);
      }
    });

    dispatch(saveCarModels(uniqueModels));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getCarSlots = (currentModel) => async (dispatch, getState) => {
  try {
    dispatch(setSelectedModel(currentModel));
    dispatch(setLoading(true));
    // console.log("Model:", currentModel);
    const data = getState().anagraficaDso?.dealerData?.db_response;
    const correctModels = new Set();

    const specificSlots = data.filter((car) => car.model === currentModel);

    console.log("Specific Slots:", specificSlots);
    dispatch(saveCarSlots(specificSlots));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default reducer;
