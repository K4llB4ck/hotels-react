import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/auth.slice';
import hotelSlice from '../slices/hotels.slice';

const rootReducer = combineReducers({
    auth: authSlice,
    hotels: hotelSlice
});

const store = configureStore({
    reducer: rootReducer
});

export default store;