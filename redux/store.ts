import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from './weather.slice';

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
