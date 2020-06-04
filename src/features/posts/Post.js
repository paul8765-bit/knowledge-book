import React from 'react';
import { PostAuthor } from './PostAuthor';
import { PostContent } from './PostContent';

export const Post = (props) => {
    return (
        <div className="post">
            <PostAuthor postedBy={props.postedBy}/>
            <PostContent postContent={props.postContent}
                        postSource={props.postSource} />
            <button className="postLikeButton" type="button">Like</button>
        </div>
    );
};
