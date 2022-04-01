import { configureStore } from "@reduxjs/toolkit";

import seriesSlice from "./series-slice";

const store = configureStore({
  reducer: {
    series: seriesSlice.reducer,
  },
});

export default store;
