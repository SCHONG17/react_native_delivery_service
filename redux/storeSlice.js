import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    items: {},
  },
  reducers: {
    increaseCount: (state) => {
      state.itemCount += 1;
    },
    setCustomer: (state, action) => {
      state.items = action.payload;
    },
    customerAdded: (state, action) => {
      if (Object.keys(state.items).length === 0) {
        state.items = Object.assign(action.payload);
      } else {
        return;
      }
    },
    customerUpdated: (state, action) => {
      (state.items = { ...state.items }),
        Object.assign(state.items, action.payload);
    },

    // Uber map destination
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      (state.travelTimeInformation = { ...state.items }),
        Object.assign(state.items, action.payload);
    },
  },
});

export const {
  setCustomer,
  customerAdded,
  increaseCount,
  customerUpdated,
  setCurrentLocation,
  setOrigin,
  setDestination,
  setTravelTimeInformation,
} = storeSlice.actions;

export const selectItems = (state) => state.store.items;
export const selectCurrentLocation = (state) => state.store.currentLocation;
export const selectOrigin = (state) => state.store.origin;
export const selectDestination = (state) => state.store.destination;
export const selectTravelTimeInformation = (state) =>
  state.store.travelTimeInformation;

export default storeSlice.reducer;
