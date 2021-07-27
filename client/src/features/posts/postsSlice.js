import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import token from "../../helper/authToken";

const initialState = {
  posts: [],
  post: {},
  status: "idle",
  error: null,
};

const BASE_URL = "http://localhost:5000/api/posts";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}`);

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

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(`${BASE_URL}/`, payload, config);

      // console.log(data);
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

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "idle";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
