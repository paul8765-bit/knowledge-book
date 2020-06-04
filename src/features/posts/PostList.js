import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { NewPostForm } from './NewPostForm';
import { addPost } from './PostListSlice';
import { Post } from './Post'
import store from '../../app/store';

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

        // Now render all posts
        const renderedPosts = [];
        postsInState.forEach((post) => {
            const renderedPost = new Post({
                //text, source, author
                postedBy: post.Post.author,
                postContent: post.Post.text,
                postSource: post.Post.source
            }).render();
            renderedPosts.unshift(renderedPost);
        });
        return renderedPosts;
    };
    
    return (
    <div className="postList">
        <NewPostForm />
        {getAllPostsFromState(props.posts)}
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