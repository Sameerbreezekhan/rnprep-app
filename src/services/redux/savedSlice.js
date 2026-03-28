import { createSlice } from '@reduxjs/toolkit';

const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    savedQuestions: [],
  },
  reducers: {
    addQuestion: (state, action) => {
      const exists = state.savedQuestions.find(
        item => item.id === action.payload.id
      );
      if (!exists) {
        state.savedQuestions.push(action.payload);
      }
    },

    removeQuestion: (state, action) => {
      state.savedQuestions = state.savedQuestions.filter(
        item => item.id !== action.payload
      );
    },

    // ✅ NEW: Clear All
    clearAllQuestions: (state) => {
      state.savedQuestions = [];
    },
  },
});

export const {
  addQuestion,
  removeQuestion,
  clearAllQuestions
} = savedSlice.actions;

export default savedSlice.reducer;