import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';

function Header(props) {
    const loginPageLabel = props.loggedInUser ? `Logged in as ${props.loggedInUser}` : 'Login Page';
    return (
    <header className="App-header">
        <img src="KnowledgeBase_big.png" className="App-logo" alt="logo" />
        <nav>
            <Link to="homepage">Home | </Link>
            <Link to="likedPosts">Liked Posts | </Link>
            <Link to="adminArea">Admin Area | </Link>
            <Link to="loginPage">{loginPageLabel}</Link>
        </nav>
    </header>
    );
}

// Code below to try and bind this so that this component is re-rendered on store change
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser
    };
  }
  
  export default connect(mapStateToProps)(Header)