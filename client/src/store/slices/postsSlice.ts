import { createSlice } from '@reduxjs/toolkit'
import { Posts } from '../services/interfaces'

interface PostsSlice {
  posts: [],
  currentId: string | null,
  currentPost: Posts | null
}

const initialState: PostsSlice = {
  posts: [],
  currentId: null,
  currentPost: null
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentId(state, action) {
      state.currentId = action.payload._id
      state.currentPost = action.payload
    },
    clearCurrentState(state) {
      state.currentId = null
      state.currentPost = null
    }
  }
})

export const { setCurrentId, clearCurrentState } = postsSlice.actions 
export default postsSlice.reducer