import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficultyModeforChess: 1,
};

export const boardgameSlice = createSlice({
  name: "boardgame",
  initialState,
  reducers: {
    setDifficultyModeforChess: (state, action) => {
      state.difficultyModeforChess = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDifficultyModeforChess,
} = boardgameSlice.actions;

export default boardgameSlice.reducer;
