import { configureStore } from '@reduxjs/toolkit';
import PostListSliceReducer from '../features/posts/PostListSlice';
import LoginUserSlice from '../features/users/LoginUserSlice';

export default configureStore({
  reducer: {
    posts: PostListSliceReducer,
    loggedInUser: LoginUserSlice
  }
});
