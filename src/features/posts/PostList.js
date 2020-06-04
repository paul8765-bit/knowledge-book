import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { NewPostForm } from './NewPostForm';
import { addPost } from './PostListSlice';
import { Post } from './Post'
import store from '../../app/store';
import { cloneDeep } from 'lodash';

function PostList(props) {
    const dispatch = useDispatch();
    const getAllPostsFromState = postsInState => {
        // Add our test posts, if no posts exist already
        if (postsInState.length === 0) {
            dispatch(addPost('Whales live for 34 years', 'Wikipedia', 'Paul Dickson'));
            dispatch(addPost('7 Scottish footballers have been called Kenny', 'BBC Sport', 'James White'));
            const newPosts = store.getState().posts;
            newPosts.forEach(post => postsInState.push(post));
        }

        return postsInState;
    };

    const existingPosts = getAllPostsFromState(props.posts);
    const existingPostsReverseOrder = cloneDeep(existingPosts).reverse();
    
    return (
    <div className="postList">
        <NewPostForm />
        <div className="postListExistingPosts">
          {existingPostsReverseOrder.map(post => {
            const postKey = Math.floor(Math.random() * 100000);
            return (
              <Post 
                key={postKey}
                postedBy={post.Post.author}
                postContent={post.Post.text}
                postSource={post.Post.source}
              />);
          })}
        </div>
    </div>
    );
}

// Code below to try and bind this so that this component is re-rendered on store change
const mapStateToProps = state => {
    return {
      //todo: state.todos[0]
      posts: state.posts
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addPost: addPost
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PostList)