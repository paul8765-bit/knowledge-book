import React from 'react';
import AnonUserImage from '../../img/anon-user.png';


export class NewPostAuthor extends React.Component {
    render() {
        return (
        <div className="newPostAuthor">
            <img className="newPostAuthorImage" src={getAuthorImage()} alt="User anon" />
            <span></span>
            <p>You are logged in as Anonymous</p>
        </div>
        );
    }
}

function getAuthorImage() {
    //TODO: implement
    return AnonUserImage;
}