import { createSlice } from "@reduxjs/toolkit";
import { IUser, ResultUser } from "../interfaces";

interface PostsSlice {
  users: [];
  currentUser: IUser | null;
}

const initialState: PostsSlice = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload 
    }
  },
});

export const { setCurrentUser } = userSlice.actions 
export default userSlice.reducer