import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/auth.service';


const initialState = {
    authenticated: null,
    token: null,
    error: null,
    loading: false
}


export const login = createAsyncThunk("auth/login", async (user, { rejectWithValue }) => {
    try {
        const response = await authService.login(user.email, user.password);
        localStorage.setItem('auth', response.accessToken);
        return response;
    } catch (e) {
        return rejectWithValue(e.message);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate: (state, action) => {
            state.authenticated = true;
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            if (state.loading == false) {
                state.loading = true;
            }
            if (state.error != null) {
                state.error = null;
            }
        });
        builder.addCase(login.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload;
            state.loading = false;
            state.token = accessToken;
            state.authenticated = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { authenticate } = authSlice.actions;


export default authSlice.reducer;