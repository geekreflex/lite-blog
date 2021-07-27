import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import token from "../../helper/authToken";

const initialState = {
  post: {},
  status: "idle",
  error: null,
};

const BASE_URL = "http://localhost:5000/api/posts";

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${payload}`);

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

export default postSlice.reducer;
