import { createSlice } from '@reduxjs/toolkit';

export const postListSlice = createSlice({
    initialState: [],
    name: 'posts',
    reducers: {
        addPost:
        {
            reducer(state, action) {
                let { text, source, author} = action.payload;
                const postKey = Math.floor(Math.random() * 100000);
                state.push(
                    { Post: 
                        {
                            id: postKey,
                            text: text, 
                            source: source, 
                            author: author,
                            likes: 0,
                            approved: false
                        }
                    });
            },
            prepare(newPostContentText, newPostContentSource, author) {
                return (
                { 
                    payload: {
                        text: newPostContentText,
                        source: newPostContentSource, 
                        author
                    }
                });
            } 
        },
        toggleLikePost:
        {
            reducer(state, action) {
                let postId = action.payload.postId;
                const likedPost = state.find(post => post.Post.id === postId);
                likedPost.Post.likes++;
            },
            prepare(postId) {
                return (
                {
                    payload: {
                        postId: postId
                    }
                });
            }
        },
        acceptPost:
        {
            reducer(state, action) {
                let postId = action.payload.postId;
                const pendingPost = state.find(post => post.Post.id === postId);
                pendingPost.Post.approved = true;
            },
            prepare(postId) {
                return (
                {
                    payload: {
                        postId: postId
                    }
                }
                );
            }
        },
        rejectPost:
        {
            reducer(state, action) {
                let postId = action.payload.postId;
                const postIndex = state.findIndex(post => post.Post.id === postId);
                state.splice(postIndex, 1);
            },
            prepare(postId) {
                return (
                {
                    payload: {
                        postId: postId
                    }
                }
                );
            }
        }
    }
});

export const { addPost, toggleLikePost, acceptPost, rejectPost } = postListSlice.actions;

export default postListSlice.reducer;