import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  currentTab: null,
  dealerData: [],
  carModelsForDealer: [],
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
    saveCarModelsForDealer: (state, action) => {
      state.carModelsForDealer = action.payload;
    },
    saveCarSlots: (state, action) => {
      state.carSlots = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    updateCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    }
    
  },
});

const { saveData, setLoading, setError, saveCarModelsForDealer, saveCarSlots, setSelectedModel,updateCurrentTab } =
  anagraficaDsoSlice.actions;
const { reducer } = anagraficaDsoSlice;

export const getDealerData = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get("/api/dealerData");
    dispatch(saveData(response.data));
    getCarModelsForDealer()(dispatch, getState);
    console.log("Dealer Data:", response.data);
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
export const getCarModelsForDealer = () => async (dispatch, getState) => {
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

    dispatch(saveCarModelsForDealer(uniqueModels));
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

    const specificSlots = data.filter((car) => car.model === currentModel);

    // console.log("Specific Slots:", specificSlots);
    dispatch(saveCarSlots(specificSlots));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateTab = (tab) => (dispatch) => {
  try {
    dispatch(updateCurrentTab(tab));
    console.log("Current Tab:", tab);
  } catch (error) {
    dispatch(setError(error.message));
  }
}
export default reducer;
