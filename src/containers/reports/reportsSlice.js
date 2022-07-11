import { createSlice } from "@reduxjs/toolkit";

export const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    list: [],
  },
  reducers: {
    addReports: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addReports } = reportsSlice.actions;

export default reportsSlice.reducer;
