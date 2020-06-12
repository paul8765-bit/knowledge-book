import { createSlice } from '@reduxjs/toolkit';

export const loginUserSlice = createSlice({
    initialState: {
        isUserLoggedIn: false,
        username: '',
        isAdmin: false
    },
    name: 'users',
    reducers: {
        logInUser: {
            reducer(state, action) {
                const user = action.payload.username;
                const isAdmin = action.payload.isAdmin;
                state.username = user;
                state.isAdmin = isAdmin;
                state.isUserLoggedIn = true;
            },
            prepare(username, isAdmin) {
                return (
                    {
                        payload: {
                            username,
                            isAdmin
                        }
                    });
            }
        },
        logOutUser(state, action)
        {
            state.username = '';
            state.isAdmin = false;
            state.isUserLoggedIn = false;
        }
    }
});

export const { logInUser, logOutUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;