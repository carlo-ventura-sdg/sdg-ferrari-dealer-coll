import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  currentTab: null,
  dealerData: [],
  carModelsForDealer: [],
  carSlots: [],
  carSlotsForDate: [],
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
    },
    saveCarSlotsForDate: (state, action) => {
      state.carSlotsForDate = action.payload;
    },
    
  },
});

const { saveData, setLoading, setError, saveCarModelsForDealer, saveCarSlots, setSelectedModel,updateCurrentTab, saveCarSlotsForDate } =
  anagraficaDsoSlice.actions;
const { reducer } = anagraficaDsoSlice;

export const getDealerData = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get("/api/dealerData");
    dispatch(saveData(response.data));
    getCarModelsForDealer()(dispatch, getState);
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
      if (!seenModels.has(car.model_desc)) {
        seenModels.add(car.model_desc);
        uniqueModels.push(car.model_desc);
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

    const specificSlots = data.filter((car) => car.model_desc === currentModel);

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


export const getCarSlotsByMonth = (currentModel) => async (dispatch, getState) => {
  try {
    dispatch(setSelectedModel(currentModel));
    dispatch(setLoading(true));

    const state = getState();
    const monthsMap = state.regionSection.monthDSO;
    const slotData = state.anagraficaDso?.dealerData?.db_response;

    const dsoToMonthAndRank = {};
    Object.entries(monthsMap).forEach(([month, dsoList]) => {
      dsoList.forEach((item) => {
        if (!item?.dso || item.rank == null) {
          return;
        }
        dsoToMonthAndRank[item.dso] = { month, rank: item.rank };
      });
    });

    const tempMap = {};

    slotData.forEach((slot) => {
      const { dso, model_desc } = slot;
      const model = model_desc?.trim();
      if (!model || model !== currentModel) return;

      // const month = dsoToMonthAndRank[dso];
      // if (!month) return;
      const dsoInfo = dsoToMonthAndRank[dso];
      if (!dsoInfo) {
        return;
      }

      const { month, rank } = dsoInfo;

      if (!tempMap[month]) tempMap[month] = {};
      if (!tempMap[month][model]) tempMap[month][model] = [];

      tempMap[month][model].push({
        ...slot,
        rank,
      });
    });

    const result = Object.entries(tempMap).map(([month, models]) => ({
      month,
      models,
    }));

    dispatch(saveCarSlotsForDate(result));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};


export default reducer;
