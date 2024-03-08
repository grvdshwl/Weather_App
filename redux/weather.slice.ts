import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  weather: null,
  forecast: null,
  loading: true,
  unit: 'cel', 
  location:null
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action) {
      const { weather, forecast,location } = action.payload;
      state.forecast = forecast;
      state.weather = weather;
      state.loading = false;
      state.location = location||weather.location
    },
    setLoading(state,action){
      state.loading = action.payload
    },
    setUnit(state,action){
      state.unit= action.payload
    },
   
  },
});

export const { setWeather,setLoading,setUnit } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;

export const selectWeather = (state:any) => state.weather;

export const selectWeatherData = createSelector(
  [selectWeather],
  (weather) => weather.weather
);

export const selectForecastData = createSelector(
  [selectWeather],
  (weather) => weather.forecast
);

export const selectLoading = createSelector(
  [selectWeather],
  (weather) => weather.loading
);
export const selectLocation= createSelector(
  [selectWeather],
  (weather) => weather.location
);

export const selectUnit = (state:any) => state.weather.unit;




export default weatherSlice.reducer;
