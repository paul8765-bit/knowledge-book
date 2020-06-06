import React from 'react';
import { PostAuthor } from './PostAuthor';
import PostContent from './PostContent';
import { useDispatch } from 'react-redux';
import { acceptPost, rejectPost } from './PostListSlice';

export const PostForApproval = (props) => {
    const dispatch = useDispatch();
    const onClickAccept = (e) => {
        dispatch(acceptPost(props.postId));
    };
    const onClickReject = (e) => {
        dispatch(rejectPost(props.postId));
    };

    return (
        <div className="post">
            <PostAuthor postedBy={props.postedBy}/>
            <PostContent postContent={props.postContent}
                        postSource={props.postSource}
                        postLikes={props.postLikes} />
            <button className="postApproveButton" type="button"
                    onClick={onClickAccept}>Approve</button>
            <button className="postApproveButton" type="button"
                    onClick={onClickReject}>Reject</button>
        </div>
    );
};
