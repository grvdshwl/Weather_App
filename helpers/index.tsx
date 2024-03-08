import { FREE_WEATHER_KEY } from "../config";
export function convertToTimeString(dateString: string) {
  const [_, timePart] = dateString.split(" ");

  const [hours, minutes] = timePart.split(":");

  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHours = hour % 12 || 12; // Convert to 12-hour format

  const timeString = `${formattedHours}:${minutes} ${ampm}`;

  return timeString;
}
function getDayOfWeek(dayIndex: any) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayIndex];
}

export function getCurrentDayAndTime(timezone: string = "Asia/Kolkata"): {
  dateTime: string;
} {
  const now = new Date();
  const options = {
    timeZone: timezone,
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDateTime = now.toLocaleString("en-US", options as any);
  const [dateTime] = formattedDateTime.split(", ");

  return { dateTime: dateTime };
}
export function convertToAmPm(dateString: string | Date): string {
  const inputDate = new Date(dateString);
  if (isNaN(inputDate.getTime())) {
    throw new Error("Invalid date string");
  }

  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

  return formattedTime;
}

export function extractAQI(data: any) {
  if (
    !data ||
    !data.list ||
    !Array.isArray(data.list) ||
    data.list.length === 0
  ) {
    return null;
  }

  const firstItem = data.list[0];
  if (!firstItem || !firstItem.main || typeof firstItem.main.aqi !== "number") {
    return null;
  }

  return firstItem.main.aqi;
}

export function convertTimestampToTimeString(
  timestamp: number,
  timezoneOffset: number
) {
  const adjustedTimestamp = timestamp + timezoneOffset;

  const date = new Date(adjustedTimestamp * 1000);

  let hours = date.getUTCHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const timeString = `${hours}:${String(minutes).padStart(2, "0")} ${period}`;

  return timeString;
}

export function extractSunriseData(data: any) {
  const currentTime = new Date();
  const day = getDayOfWeek(currentTime.getDay());

  const sunRiseData = {
    day: day,
    sunrise: convertTimestampToTimeString(data.sys.sunrise, data.timezone),
    sunset: convertTimestampToTimeString(data.sys.sunset, data.timezone),
    currentTime: convertToAmPm(currentTime),
  };

  return sunRiseData;
}

export const extractForecastInfo = (data: any) => {
  const forecastDays = data.forecast.forecastday;
  return forecastDays.map((forecastDay: any) => {
    const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition } =
      forecastDay.day;
    const { date } = forecastDay;
    const day = getDayOfWeek(new Date(date).getDay());
    return {
      minTemp: {
        c: mintemp_c,
        f: mintemp_f,
      },
      maxTemp: {
        c: maxtemp_c,
        f: maxtemp_f,
      },
      condition: condition,
      date,
      day,
    };
  });
};

export const extractWeatherDetails = (data: any) => {
  const {
    uv,
    temp_c,
    temp_f,
    pressure_in,
    condition,
    wind_kph,
    vis_km,
    humidity,
    feelslike_c,
    feelslike_f,
  } = data.current;
  const { localtime, name, tz_id } = data.location;
  const day = getDayOfWeek(new Date(localtime).getDay());
  return {
    uv,
    temp: {
      c: temp_c,
      f: temp_f,
    },
    pressure: pressure_in,
    condition: condition,
    wind: wind_kph,
    datetime: convertToTimeString(localtime),
    day,
    humidity,
    feelsLike: {
      c: feelslike_c,
      f: feelslike_f,
    },
    visibility: vis_km,
    location: name,
    timezone: tz_id,
  };
};

export const getLatLong = async (query: string) => {
  const url = `http://api.weatherapi.com/v1/search.json?key=${FREE_WEATHER_KEY}&q=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      return { latitude: lat, longitude: lon };
    } else {
      console.error(new Error("No location data found."));
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
};
