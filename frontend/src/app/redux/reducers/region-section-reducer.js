import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  regionData: [],
  dealers: [],
  carSlotsForDealer: [],
  selectedModel: null,
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
    saveDealers: (state, action) => {
      state.dealers = action.payload;
    },
    saveCarSlotsForDealer: (state, action) => {
      state.carSlotsForDealer = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
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
} = regionSectionSlice.actions;
const { reducer } = regionSectionSlice;

export const getRegionData = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get("/api/regionData");
    dispatch(saveData(response.data));
    console.log("Region Data:", response.data);
    // getDealers()(dispatch, getState);
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
      const dealerId = d.dealer; // Adjust based on actual structure

      if (d.model === currentModel && !seenDealerIds.has(dealerId)) {
        seenDealerIds.add(dealerId);
        uniqueDealers.push(d.dealer);
      }
    });
    console.log("Unique Dealers:", uniqueDealers);
    dispatch(saveDealers(uniqueDealers));
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
      console.log("cm:", currentModel);

      // console.log("Model:", currentModel);
      const slotData = getState().regionSection.regionData.reg_response;
      const dealers = getState().regionSection?.regionData?.reg_response;

      const result = {};

      // Get all known dealer names
      const knownDealers = new Set(dealers.map((d) => d.dealer));

      // Filter slots for the selected model
      const specificSlots = slotData.filter(
        (slot) => slot.model === currentModel
      );

      specificSlots.forEach((slot) => {
        const dealer = slot.dealer;
        if (!knownDealers.has(dealer)) return;

        if (!result[dealer]) {
          result[dealer] = [];
        }

        result[dealer].push(slot);
      });

      console.log("Specific Slots:", result);
      dispatch(saveCarSlotsForDealer(result));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export default reducer;
