import React from 'react';
import { PostAuthor } from './PostAuthor';
import PostContent from './PostContent';
import { useDispatch } from 'react-redux';
import { toggleLikePost } from './PostListSlice';

export const Post = (props) => {
    const dispatch = useDispatch();
    const onClick = (e) => {
        dispatch(toggleLikePost(props.postId));
    };

    return (
        <div className="post">
            <PostAuthor postedBy={props.postedBy}/>
            <PostContent postContent={props.postContent}
                        postSource={props.postSource}
                        postLikes={props.postLikes} />
            <button className="postLikeButton" type="button"
                    onClick={onClick} hidden={props.hideLikeButton}>Like</button>
        </div>
    );
};
