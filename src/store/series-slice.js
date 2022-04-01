import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const timeout = (payload) => {
  return new Promise((resolve) => setTimeout(() => resolve(payload), 2000));
};

export const getEpisodes = createAsyncThunk("series/getEpisodes", async () => {
  return axios
    .get(process.env.REACT_APP_FINAL_SPACE_EPISODE_URL)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
});

export const getCharacters = createAsyncThunk(
  "series/getCharacters",
  async () => {
    return axios
      .get(process.env.REACT_APP_FINAL_SPACE_CHARACTER_URL)
      .then((res) => {
        return res.data;
        // return timeout(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const asyncSeriesActions = {
  getEpisodes,
  getCharacters,
};

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    episodes: {
      list: [],
      status: "",
    },
    characters: {
      list: [],
      status: "",
    },
    status: "",
  },
  reducers: {
    postSuccess(callback) {
      callback();
    },
  },
  extraReducers: {
    [getEpisodes.pending]: (state, action) => {
      state.episodes.status = "loading";
    },
    [getEpisodes.fulfilled]: (state, { payload }) => {
      state.episodes.status = "success";
      state.episodes.list = payload;
    },
    [getEpisodes.rejected]: (state, action) => {
      state.episodes.status = "failed";
    },
    [getCharacters.pending]: (state, action) => {
      state.characters.status = "loading";
    },
    [getCharacters.fulfilled]: (state, { payload }) => {
      state.characters.status = "success";
      state.characters.list = payload;
      seriesSlice.caseReducers.postSuccess(() =>
        console.log("Successfully finished fetching...")
      );
    },
    [getCharacters.rejected]: (state, action) => {
      state.characters.status = "failed";
    },
  },
});

export const seriesActions = seriesSlice.actions;

export default seriesSlice;
