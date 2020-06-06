import React from 'react';
import store from './app/store';
import ApprovedPostList from './features/posts/ApprovedPostList';
import { NewPostForm } from './features/posts/NewPostForm';
import { addPost } from './features/posts/PostListSlice';
import { connect } from 'react-redux';

function Homepage(props) {
    return (
        <div className="App">
          <h1>Homepage</h1>
          <NewPostForm />
          <ApprovedPostList posts={store.getState().posts} />
        </div>
      );
}

// Code below to try and bind this so that this component is re-rendered on store change
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: addPost
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)