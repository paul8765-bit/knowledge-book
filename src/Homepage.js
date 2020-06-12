import React from 'react';
import store from './app/store';
import ApprovedPostList from './features/posts/ApprovedPostList';
import NewPostForm from './features/posts/NewPostForm';

export default function() {
    return (
        <div className="App">
          <h1>Homepage</h1>
          <NewPostForm activeUser={store.getState().activeUser} />
          <ApprovedPostList posts={store.getState().posts} />
        </div>
      );
}