import React from 'react';

export class PostContent extends React.Component {
    render() {
        const postContent = this.props.postContent;
        const postSource = this.props.postSource;

        return (
            <div className="postContent">
                <h2>{postContent}</h2>
                <h3>Source: {postSource}</h3>
            </div>
        );
    }
}