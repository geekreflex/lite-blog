import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helper/baseUrl";

const initialState = {
  post: {},
  status: "idle",
  error: null,
};

const url = `${BASE_URL()}/api/posts`;

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${url}/${payload}`);

      // console.log(data);
      return data;
    } catch (error) {
      // console.log(error.response);
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getPostById.pending]: (state, action) => {
      state.post = {};
      state.status = "loading";
    },
    [getPostById.fulfilled]: (state, action) => {
      state.status = "idle";
      state.post = action.payload;
    },
    [getPostById.rejected]: (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
