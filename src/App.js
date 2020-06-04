import React from 'react';
import './App.css';
import PostList from './features/posts/PostList';
import store from './app/store';

function App() {
  return (
    <div className="App">
      <PostList posts={store.getState().posts} />
    </div>
  );
}

export default App;
