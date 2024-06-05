import { configureStore } from '@reduxjs/toolkit'
import {jybekApi} from "../api/jybekApiSlice.js";

const store = configureStore({
  reducer: {
    [jybekApi.reducerPath]: jybekApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jybekApi.middleware),
  devTools: true,
})

export default store;