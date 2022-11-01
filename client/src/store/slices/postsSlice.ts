import { createSlice } from '@reduxjs/toolkit'

interface PostsSlice {
  posts: []
}

const initialState: PostsSlice = {
  posts: []
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  }
})

export const {} = postsSlice.actions 
export default postsSlice.reducer