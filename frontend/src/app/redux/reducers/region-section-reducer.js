import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  regionData: [],
  dealers: [],
  carSlotsForDealer: [],
  selectedModel: null,
  monthDSO: [],
  carModels: [],
};

const regionSectionSlice = createSlice({
  name: "regionSection",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    saveData: (state, action) => {
      state.regionData = action.payload;
    },
    saveMonthDSO: (state, action) => {
      state.monthDSO = action.payload;
    },
    saveDealers: (state, action) => {
      state.dealers = action.payload;
    },
    saveCarSlotsForDealer: (state, action) => {
      state.carSlotsForDealer = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    saveCarModels: (state, action) => {
      state.carModels = action.payload;
    },
  },
});

const {
  setLoading,
  setError,
  saveData,
  saveDealers,
  saveCarSlotsForDealer,
  setSelectedModel,
  saveMonthDSO,
  saveCarModels,
} = regionSectionSlice.actions;
const { reducer } = regionSectionSlice;

export const getRegionData = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get("/api/regionData");
    dispatch(saveData(response.data));
    const monthResponse = await axios.get("/api/monthDSO");
    dispatch(saveMonthDSO(monthResponse.data.month_response));
    // console.log("Month Data:", monthResponse.data.month_response);
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getDealers = (currentModel) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const data = getState().regionSection.regionData.reg_response;

    const seenDealerIds = new Set();
    const uniqueDealers = [];

    data.forEach((d) => {
      const dealerId = d.dealer_desc;
      if (d.model_code === currentModel && !seenDealerIds.has(dealerId)) {
        seenDealerIds.add(dealerId);
        uniqueDealers.push(d.dealer_desc);
      }
    });
    // console.log("Unique Dealers:", uniqueDealers);
    dispatch(saveDealers(uniqueDealers));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getCarModels = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const data = getState().regionSection.regionData.reg_response;

    const seenModels = new Set();
    const uniqueModels = [];

    data.forEach((car) => {
      if (!seenModels.has(car.model_desc)) {
        seenModels.add(car.model_desc);
        uniqueModels.push(car.model_desc);
      }
    });

    dispatch(saveCarModels(uniqueModels));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getCarSlotsForDealer =
  (currentModel) => async (dispatch, getState) => {
    try {
      dispatch(setSelectedModel(currentModel));
      dispatch(setLoading(true));

      const state = getState();
      const monthsMap = state.regionSection.monthDSO || {};
      const slotData = state.regionSection.regionData?.reg_response || [];

      const dsoToMonthAndRank = {};

      Object.entries(monthsMap).forEach(([month, dsoList]) => {
        dsoList.forEach((item) => {
          if (!item?.dso || item.rank == null) {
            return;
          }
          dsoToMonthAndRank[item.dso] = { month, rank: item.rank };
        });
      });

      const result = {};

      slotData.forEach((slot) => {
        const { dealer_code, dso, model_desc } = slot;

        if (
          model_desc.trim().toLowerCase() !== currentModel.trim().toLowerCase()
        ) {
          return;
        }

        const dsoInfo = dsoToMonthAndRank[dso];
        if (!dsoInfo) {
          return;
        }

        const { month, rank } = dsoInfo;

        if (!result[dealer_code]) result[dealer_code] = {};
        if (!result[dealer_code][month]) result[dealer_code][month] = [];

        result[dealer_code][month].push({
          ...slot,
          rank,
        });
      });

      dispatch(saveCarSlotsForDealer(result));
    } catch (error) {
      console.error("Error in getCarSlotsForDealer:", error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export default reducer;
