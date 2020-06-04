import React from 'react';
import { PostAuthor } from './PostAuthor';
import { PostContent } from './PostContent';


export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.postedBy = props.postedBy;
        this.postContent = props.postContent;
        this.postSource = props.postSource;
        this.key = Math.floor(Math.random() * 100000);
    }   

    render() {
        return (
        <div className="post" key={this.key}>
            <PostAuthor postedBy={this.postedBy}/>
            <PostContent postContent={this.postContent}
                         postSource={this.postSource} />
            <button className="postLikeButton" type="button">Like</button>
        </div>);
    }

    postedBy;
    postContent;
    postSource;
    key;
}