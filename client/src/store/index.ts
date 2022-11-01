import { configureStore } from "@reduxjs/toolkit";
import { memoriesApi } from "./services/memoriesApi";
import postsSlice from "./slices/postsSlice";


const store = configureStore({
  reducer: {
    posts: postsSlice,
    [memoriesApi.reducerPath]: memoriesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(memoriesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store