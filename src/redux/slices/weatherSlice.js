import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherInfo = createAsyncThunk('fetchWeatherInfo', async (location) => {
    console.log("process.env ", process.env);
    let apiKey = process.env.REACT_APP_API_KEY
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);
    console.log("data", response);
    const info = response.data;
    return info;
})

const weatherSlice = createSlice({
    name: 'weatherInfo',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherInfo.fulfilled, (state, action) => {
            console.log("action.payload ", action.payload);
            state.weatherImg = action.payload.current.condition.icon;
            state.weatherText = action.payload.current.condition.text;
            state.temperature = action.payload.current.temp_c;
            state.wind = action.payload.current.wind_kph;
            state.humidity = action.payload.current.humidity;
            state.visibility = action.payload.current.vis_km;
            state.location = action.payload.location.name;
            return state;
        })
    }

})

export default weatherSlice.reducer;