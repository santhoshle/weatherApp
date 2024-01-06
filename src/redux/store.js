import  { configureStore } from '@reduxjs/toolkit';
import weatherInfo from './slices/weatherSlice';

export const store = configureStore({
    reducer: {
        weatherInfo
    },
})

