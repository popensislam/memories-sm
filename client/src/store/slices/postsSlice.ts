import { createSlice } from '@reduxjs/toolkit'
import { Posts } from '../services/interfaces'

interface PostsSlice {
  posts: [],
  currentId: string | null,
  currentPost: Posts | null,
  actAddPost: boolean,
  themeMode: any
}

const initialState: PostsSlice = {
  posts: [],
  currentId: null,
  currentPost: null,
  actAddPost: true,
  themeMode: 'light',
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
    },
    setActAddPost(state) {
      state.actAddPost = !state.actAddPost
    },
    setThemeMode(state) {
      if (state.themeMode === 'light') {
        state.themeMode = 'dark'
      } else {
        state.themeMode = 'light'
      }
    }
  }
})

export const { setCurrentId, clearCurrentState, setActAddPost, setThemeMode } = postsSlice.actions 
export default postsSlice.reducer