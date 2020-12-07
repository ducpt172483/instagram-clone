import userApi from '../../api/userApi';

import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

export const register = createAsyncThunk(
    '/auth/signup',
    async (payload) => {
        const data = await userApi.register(payload);

        console.log(data);

        // localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.newUser));

        return data.newUser;
    }
);

export const login = createAsyncThunk(
    '/auth/signin',
    async (payload) => {
        const data = await userApi.login(payload);

        console.log(data);

        localStorage.setItem('accessToken', data.accessToken);
        // localStorage.setItem('user', JSON.stringify(data.newUser));

        return data.accessToken;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
});

const {
    reducer
} = userSlice;

export default reducer;