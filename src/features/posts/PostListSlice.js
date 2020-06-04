import { createSlice } from '@reduxjs/toolkit';

export const postListSlice = createSlice({
    initialState: [],
    name: 'posts',
    reducers: {
        addPost:
        {
            reducer(state, action) {
                let { text, source, author} = action.payload;
                state.push(
                    { Post: 
                        {
                            text: text, 
                            source: source, 
                            author: author
                        }
                    });
            },
            prepare(newPostContentText, newPostContentSource, author) {
                return { payload: {
                    text: newPostContentText,
                    source: newPostContentSource, 
                    author
                }};
            } 
        }
    }
});

export const { addPost } = postListSlice.actions;

export const PostListSliceReducer = postListSlice.reducer;