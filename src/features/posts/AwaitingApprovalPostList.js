import React from 'react';
import { connect } from 'react-redux'
import { PostForApproval } from './PostForApproval';

function AwaitingApprovalPostList(props) {
    const existingPosts = props.posts;
    const awaitingApprovalPosts = existingPosts.filter(post => !post.Post.approved);
    
    return (
    <div className="postList">
        <div className="postListExistingPosts">
          {awaitingApprovalPosts.map(post => {
            return (
              <PostForApproval 
                key={post.Post.id}
                postId={post.Post.id}
                postedBy={post.Post.author}
                postContent={post.Post.text}
                postSource={post.Post.source}
                postLikes={post.Post.likes}
              />);
          })}
        </div>
    </div>
    );
}

// Code below to try and bind this so that this component is re-rendered on store change
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(AwaitingApprovalPostList)