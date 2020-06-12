import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { logInUser, logOutUser } from './features/users/LoginUserSlice';
import axios from 'axios';

function LoginPage(props) {
    const activeUser = props.activeUser;
    const dispatch = useDispatch();
    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const onClickLogin = e => {
        // External API here
        axios.post('http://localhost:3001/login', null, { params: { 
            username: usernameText, 
            hashedPassword: hashPassword(passwordText)
        }})
        .then(results => {
            if (results.data.success) {
                dispatch(logInUser(results.data.payload.username, results.data.payload.isAdmin));
                setUsernameText('');
                setPasswordText('');
            }
            else {
                alert(results.data.message);
            }
        })
        .catch(error => {
            alert(error);
        });
        
    };

    const onClickLogout = e => {
        dispatch(logOutUser());
    };

    if (activeUser.isUserLoggedIn) {
        return (
            <div className="loginPage">
                <h2>You are logged in as {activeUser.username}</h2>
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

function hashPassword(password) {
    //TODO
    return password;
}

// Code below to try and bind this so that this component is re-rendered on store change
const mapStateToProps = state => {
    return {
        activeUser: state.activeUser
    };
}
  
export default connect(mapStateToProps)(LoginPage)