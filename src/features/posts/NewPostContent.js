import React, { useState } from 'react';
import { addPost } from './PostListSlice';
import { useDispatch } from 'react-redux';

export default function(props) {
    const activeUser = props.activeUser;
    const dispatch = useDispatch();
    const [newPostContentText, setNewPostContentText] = useState('');
    const [newPostContentSource, setNewPostContentSource] = useState('');
    const factCheckboxTicked = () => { return document.getElementById("input_checkbox").checked; };

    const onClick = (e) => {
        if (!newPostContentText || !newPostContentSource || !factCheckboxTicked()) {
            return;
        }
        dispatch(addPost(newPostContentText, newPostContentSource, activeUser.username));
        resetNewPost();
    };

    const resetNewPost = () => {
        setNewPostContentText('');
        setNewPostContentSource('');
        document.getElementById("input_checkbox").checked = false;
    };

    if (activeUser.isUserLoggedIn) {
        return (
            <div className="newPostContent">
                <input className="newPostContentText" type="text" value={newPostContentText} 
                        onChange={(e) => {setNewPostContentText(e.target.value)}}></input><br />
                <input type="checkbox" name="input_checkbox" id="input_checkbox" />
                <label htmlFor="input_checkbox">This is a fact, not opinion</label><br />
                <h3>Source: </h3>
                <input className="newPostContentSource" type="text" value={newPostContentSource} 
                        onChange={(e) => {setNewPostContentSource(e.target.value)}}></input>
                <button className="newPostSubmitButton" type="button" 
                        onClick={onClick}>Submit</button>
            </div>
        );
    }
    else {
        return (
        <div className="newPostContent">
                <input className="newPostContentText" type="text" disabled={true}></input><br />
                <input type="checkbox" name="input_checkbox" id="input_checkbox" disabled={true} />
                <label htmlFor="input_checkbox">This is a fact, not opinion</label><br />
                <h3>Source: </h3>
                <input className="newPostContentSource" type="text" disabled={true}></input>
                <button className="newPostSubmitButton" type="button" disabled={true}>Submit</button>
            </div>
        );
    }
    
}