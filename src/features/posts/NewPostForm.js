import React from 'react';
import { NewPostAuthor } from './NewPostAuthor';
import { NewPostContent } from './NewPostContent';

export class NewPostForm extends React.Component {
    render() {
        return (
            <div className="newPostForm">
                <NewPostAuthor />
                <NewPostContent />
            </div>
        );
    }
}