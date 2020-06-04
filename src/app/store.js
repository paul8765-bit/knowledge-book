import { configureStore } from '@reduxjs/toolkit';
import { PostListSliceReducer } from '../features/posts/PostListSlice';

export default configureStore({
  reducer: {
    posts: PostListSliceReducer
  }
});
