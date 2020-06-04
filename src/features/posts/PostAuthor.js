import React from 'react';
import AnonUserImage from '../../img/anon-user.png';


export class PostAuthor extends React.Component {

    render() {
        const author = this.props.postedBy;
        return (
        <div className="postAuthor">
            <img className="postAuthorImage" src={getAuthorImage(author)} alt={`User ${author}`} />
            <span></span>
            <p>Posted by {author}</p>
        </div>);
    }
}

function getAuthorImage(author) {
    // TODO: implement this properly
    return AnonUserImage;
}