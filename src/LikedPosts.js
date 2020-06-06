import React from 'react';
import store from './app/store';
import LikedPostList from './features/posts/LikedPostList';

export default function() {
    return (
        <div className="App">
          <h1>Liked Posts</h1>
          <LikedPostList posts={store.getState().posts} />
        </div>
      );
}