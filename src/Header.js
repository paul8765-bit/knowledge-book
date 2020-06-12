import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';

function Header(props) {
    const loginPageLabel = props.activeUser.isUserLoggedIn ? `Logged in as ${props.activeUser.username}` : 'Login Page';
    const adminAreaLink = props.activeUser.isAdmin ? 
                            <Link to="adminArea">Admin Area | </Link> :
                            '';
    return (
    <header className="App-header">
        <img src="KnowledgeBase_big.png" className="App-logo" alt="logo" />
        <nav>
            <Link to="homepage">Home | </Link>
            <Link to="likedPosts">Liked Posts | </Link>
            {adminAreaLink}
            <Link to="loginPage">{loginPageLabel}</Link>
        </nav>
    </header>
    );
}

// Code below to try and bind this so that this component is re-rendered on store change
const mapStateToProps = state => {
    return {
        activeUser: state.activeUser
    };
  }
  
  export default connect(mapStateToProps)(Header)