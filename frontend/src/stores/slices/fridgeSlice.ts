import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

type LoadingState = {
  isLoading: boolean;
};

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    updateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// selectors
export const selectIsLoading = (state: RootState) => state.loading;

// actions
export const { updateIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const fridgeSlice = createSlice({
  name: "fridge",
  initialState: {
    items: [], // Initial state for fridge items
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = fridgeSlice.actions;
export default fridgeSlice.reducer;
