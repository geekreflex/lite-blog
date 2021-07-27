import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../helper/baseUrl";

const initialState = {
  user: {},
  isAuthenticated: false,
  status: "idle",
  error: null,
};

const url = `${BASE_URL()}/api/users`;

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(`${url}/register`, payload, config);

      console.log(data);
      return data;
    } catch (error) {
      console.error(error.response);
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(`${url}}/login`, payload, config);
      console.log(data);

      return data;
    } catch (error) {
      console.error(error.response);
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfoFromStorage(state) {
      const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
      if (userInfo) {
        state.isAuthenticated = true;
        state.user = userInfo;
      }
    },
    logoutUser() {
      localStorage.removeItem("userInfo");
      window.location.href = "/";
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.status = "loaing";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "idle";
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      window.location.href = "/";
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    },
    [loginUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "idle";
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      window.location.href = "/";
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    },
  },
});

export const { getUserInfoFromStorage, logoutUser } = userSlice.actions;

export default userSlice.reducer;
