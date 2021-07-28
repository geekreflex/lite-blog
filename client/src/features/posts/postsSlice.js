import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import token from "../../helper/authToken";

import { BASE_URL } from "../../helper/baseUrl";

const initialState = {
  posts: [],
  post: {},
  status: "idle",
  error: null,
};

const url = `${BASE_URL()}/api/posts`;

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${url}`);

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

      const { data } = await axios.post(`${url}/`, payload, config);

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
    [createPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [createPost.fulfilled]: (state, action) => {
      state.status = "idle";
      state.posts.unshift(action.payload);
      window.location.href = "/";
    },
    [createPost.rejected]: (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
