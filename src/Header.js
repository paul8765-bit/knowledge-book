import React from 'react';
import { Link } from '@reach/router';

export default function() {
    return (
    <header className="App-header">
        <img src="KnowledgeBase_big.png" className="App-logo" alt="logo" />
        <nav>
            <Link to="homepage">Home | </Link>
            <Link to="likedPosts">Liked Posts | </Link>
            <Link to="adminArea">Admin Area</Link>
        </nav>
    </header>
    );
}