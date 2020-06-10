import { createSlice } from '@reduxjs/toolkit';

export const loginUserSlice = createSlice({
    initialState: '',
    name: 'users',
    reducers: {
        logInUser:
        {
            reducer(state, action) {
                const user = action.payload.username;
                return user;
            },
            prepare(username) {
                return (
                    {
                        payload: {
                            username
                        }
                    }
                );
            }
        },
        logOutUser(state, action)
        {
            return '';
        }
    }
});

export const { logInUser, logOutUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;