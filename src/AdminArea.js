import React from 'react';
import store from './app/store';
import AwaitingApprovalPostList from './features/posts/AwaitingApprovalPostList';
import { addPost } from './features/posts/PostListSlice';
import { connect } from 'react-redux';

function AdminArea(props) {
    return (
        <div className="App">
          <h1>Admin Area</h1>
          <AwaitingApprovalPostList posts={store.getState().posts} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminArea)