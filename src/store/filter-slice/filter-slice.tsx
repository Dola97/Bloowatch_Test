import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./states-types";
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setChoosedCategorie: (state, action) => {
      state.choosedCategorie = action.payload;
    },
    setSort: (state, action) => {
      state.sorting = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange.max = action.payload.max;
      state.priceRange.min = action.payload.min;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setImage: (state, action) => {
      state.currentImage = action.payload;
    },
  },
});

export const {
  setChoosedCategorie,
  setImage,
  setQuery,
  setSort,
  setPriceRange,
  setQuantity,
} = filterSlice.actions;

export default filterSlice.reducer;
