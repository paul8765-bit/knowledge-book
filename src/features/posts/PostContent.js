import React from 'react';

export default (props) => {
    const postContent = props.postContent;
    const postSource = props.postSource;
    const postLikes = props.postLikes;
    const likesText = postLikes === 1 ? '1 like' : `${postLikes} likes`;

    return (
        <div className="postContent">
            <h2>{postContent}</h2>
            <h3>Source: {postSource}</h3>
            <h4>{likesText}</h4>
        </div>
    );
    
}