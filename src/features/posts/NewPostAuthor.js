import React from 'react';
import AnonUserImage from '../../img/anon-user.png';


export default function(props) {
    const activeUser = props.activeUser;
    const activeUserMessage = activeUser => {
        return activeUser.isUserLoggedIn ?
            <p className="userIsloggedInMessage">{`You are logged in as ${activeUser.username}`}</p> :
            <p className="userNotLoggedInMessage">Please log in before posting</p>;
    };
    return (
    <div className="newPostAuthor">
        <img className="newPostAuthorImage" src={getAuthorImage()} alt="User anon" />
        <span></span>
        {activeUserMessage(activeUser)}
    </div>
    );
}

function getAuthorImage() {
    //TODO: implement
    return AnonUserImage;
}