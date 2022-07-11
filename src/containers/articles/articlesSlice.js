import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    list: [],
  },
  reducers: {
    addArticles: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
