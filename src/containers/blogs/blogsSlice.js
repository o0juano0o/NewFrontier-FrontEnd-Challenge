import { createSlice } from "@reduxjs/toolkit";

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    list: [],
  },
  reducers: {
    addBlogs: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
