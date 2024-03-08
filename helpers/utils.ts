import { extractSunriseData, extractForecastInfo, extractWeatherDetails } from ".";
import { FREE_WEATHER_KEY, OPEN_WEATHER_KEY } from "../config";

export const getWeatherData = async (latitude:string, longitude:string, cnt = 7) => {
    const sunriseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_KEY}`;
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${FREE_WEATHER_KEY}&q=${latitude},${longitude}&aqi=yes`
    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${FREE_WEATHER_KEY}&q=${latitude},${longitude}&aqi=no&alerts=no&days=${cnt}`;

    try {
        const [sunriseResponse,weatherResponse, forecastResponse] = await Promise.all([
            fetch(sunriseUrl),            
            fetch(weatherUrl),
            fetch(forecastUrl)
        ]);

        if (!weatherResponse.ok || !sunriseResponse.ok||!forecastResponse.ok ) {
            throw new Error('Failed to fetch data.');
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();
        const sunriseData = await sunriseResponse.json();


        return {forecast:extractForecastInfo(forecastData),weather:{...extractWeatherDetails(weatherData),...extractSunriseData(sunriseData)}};
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getGeolocation = () => new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error.message);
        }
      );
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });


  