import React from 'react';
import NewPostAuthor from './NewPostAuthor';
import NewPostContent from './NewPostContent';

export default function(props) {
    const activeUser = props.activeUser;
    return (
        <div className="newPostForm">
            <NewPostAuthor activeUser={activeUser} />
            <NewPostContent activeUser={activeUser} />
        </div>
    );
}