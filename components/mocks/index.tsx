const currentWeatherData = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    "1h": 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: "IT",
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: "Zocca",
  cod: 200,
};

export const mockUserImage =
  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const mockWeeklyData = [
  {
    id: 1,
    day: "Monday",
    iconCode: "01d",
    minTemp: 10,
    maxTemp: 20,
  },
  {
    id: 2,
    day: "Tuesday",
    iconCode: "02d",
    minTemp: 12,
    maxTemp: 22,
  },
  {
    id: 3,
    day: "Wednesday",
    iconCode: "03d",
    minTemp: 11,
    maxTemp: 21,
  },
  {
    id: 4,
    day: "Thursday",
    iconCode: "04d",
    minTemp: 13,
    maxTemp: 23,
  },
  {
    id: 5,
    day: "Friday",
    iconCode: "09d",
    minTemp: 9,
    maxTemp: 19,
  },
  {
    id: 6,
    day: "Saturday",
    iconCode: "10d",
    minTemp: 8,
    maxTemp: 18,
  },
  {
    id: 7,
    day: "Sunday",
    iconCode: "11d",
    minTemp: 14,
    maxTemp: 24,
  },
];
export const mockWeatherData = [
  { id: 1, minTemp: 10, maxTemp: 20 },
  { id: 2, minTemp: 12, maxTemp: 22 },
  { id: 3, minTemp: 11, maxTemp: 21 },
  { id: 4, minTemp: 13, maxTemp: 23 },
  { id: 5, minTemp: 9, maxTemp: 19 },
  { id: 6, minTemp: 8, maxTemp: 18 },
];
