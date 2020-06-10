import React from 'react';
import { connect } from 'react-redux'
import { Post } from './Post'

function ApprovedPostList(props) {
    const existingPosts = props.posts;
    const approvedPosts = existingPosts.filter(post => post.Post.approved);
    if (approvedPosts.length === 0) {
      return <h3>None yet, please check back later</h3>
    }
    
    return (
    <div className="postList">
        <div className="postListExistingPosts">
          {approvedPosts.map(post => {
            return (
              <Post 
                key={post.Post.id}
                postId={post.Post.id}
                postedBy={post.Post.author}
                postContent={post.Post.text}
                postSource={post.Post.source}
                postLikes={post.Post.likes}
                hideLikeButton={false}
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
export default connect(mapStateToProps)(ApprovedPostList)