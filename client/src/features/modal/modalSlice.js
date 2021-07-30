import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleDeleteModal(state, action) {
      state.value = !state.value;
    },
  },
});

export const { toggleDeleteModal } = modalSlice.actions;

export default modalSlice.reducer;
