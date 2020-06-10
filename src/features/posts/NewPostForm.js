import React from 'react';
import NewPostAuthor from './NewPostAuthor';
import NewPostContent from './NewPostContent';

export default function(props) {
    const loggedInUser = props.loggedInUser;
    return (
        <div className="newPostForm">
            <NewPostAuthor loggedInUser={loggedInUser} />
            <NewPostContent loggedInUser={loggedInUser} />
        </div>
    );
}