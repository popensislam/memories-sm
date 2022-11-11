import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authServices/authApi";
import { memoriesApi } from "./postServices/memoriesApi";
import postsSlice from "./slices/postsSlice";
import userSlice from './slices/userSlice'

const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: userSlice,
    [memoriesApi.reducerPath]: memoriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(memoriesApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
