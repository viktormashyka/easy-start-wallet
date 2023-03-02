import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const transactionsToShow = createSlice({
  name: 'transactionsToShow',
  initialState,
  reducers: {
    showTransactions: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { showTransactions } = transactionsToShow.actions;
export const transactionsToShowReducer = transactionsToShow.reducer;
