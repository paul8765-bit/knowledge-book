import React from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import Homepage from './Homepage';
import LikedPosts from './LikedPosts';
import AdminArea from './AdminArea';
import LoginPage from './LoginPage';
import Header from './Header';
import { Router } from '@reach/router';
import { addPost } from './features/posts/PostListSlice';
import store from './app/store';

function App() {
  const dispatch = useDispatch();
  dispatch(addPost('Whales live for 34 years', 'Wikipedia', 'Paul Dickson'));
  dispatch(addPost('7 Scottish footballers have been called Kenny', 'BBC Sport', 'James White'));
  return (
    <div className="App">
      <Header activeUser={store.getState().activeUser}/>
      <Router primary={false}>
        <LikedPosts path="likedPosts" />
        <AdminArea path="adminArea" />
        <LoginPage path="loginPage" activeUser={store.getState().activeUser} />
        <Homepage default />
      </Router>
    </div>
  );
}

export default App;