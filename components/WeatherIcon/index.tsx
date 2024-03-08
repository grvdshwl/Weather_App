import React from "react";

interface WeatherIconProps {
  iconCode: string;
  style?: React.CSSProperties;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode, style }) => {
  const getWeatherIconUrl = (code: string) => {
    const baseUrl = "http://openweathermap.org/img/wn/";

    return `${baseUrl}${code}@2x.png`;
  };

  return (
    <img
      src={getWeatherIconUrl(iconCode)}
      alt="Weather Icon"
      style={{ width: "50px", height: "50px", ...style }}
    />
  );
};

export default WeatherIcon;
