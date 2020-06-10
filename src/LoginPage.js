import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { logInUser, logOutUser } from './features/users/LoginUserSlice';

function LoginPage(props) {
    const loggedInUser = props.loggedInUser;
    const dispatch = useDispatch();
    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const onClickLogin = e => {
        dispatch(logInUser(usernameText, passwordText));
        setUsernameText('');
        setPasswordText('');
    };

    const onClickLogout = e => {
        dispatch(logOutUser());
    };

    if (loggedInUser) {
        return (
            <div className="loginPage">
                <h2>You are logged in as {loggedInUser}</h2>
                <button onClick={onClickLogout}>Logout</button>
            </div>
        );
    }
    else {
        return (
            <div className="loginPage">
                <h2>Username</h2>
                <input id="input_Username" type="text" value={usernameText}
                        onChange={e => setUsernameText(e.target.value)} />
                <h2>Password</h2>
                <input id="input_Password" type="password" value={passwordText}
                        onChange={e => setPasswordText(e.target.value)} /><br />
                <button onClick={onClickLogin}>Login</button>
            </div>
        );
    }

    
};

// Code below to try and bind this so that this component is re-rendered on store change
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser
    };
}
  
export default connect(mapStateToProps)(LoginPage)