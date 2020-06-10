import React from 'react';
import AnonUserImage from '../../img/anon-user.png';


export default function(props) {
    const loggedInUser = props.loggedInUser;
    const loggedInUserMessage = loggedInUser => {
        return loggedInUser ?
            <p className="userIsloggedInMessage">{`You are logged in as ${loggedInUser}`}</p> :
            <p className="userNotLoggedInMessage">Please log in before posting</p>;
    };
    return (
    <div className="newPostAuthor">
        <img className="newPostAuthorImage" src={getAuthorImage()} alt="User anon" />
        <span></span>
        {loggedInUserMessage(loggedInUser)}
    </div>
    );
}

function getAuthorImage() {
    //TODO: implement
    return AnonUserImage;
}