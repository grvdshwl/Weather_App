"use client";
import React, { useState } from "react";
import { RightMainContainer } from "./RightMain.styles";
import RightMainPrimary from "../RightMainPrimary";
import WeatherForecast from "../WeatherForecast";
import WeatherHighlight from "../WeatherHighlight";
import { useSelector } from "react-redux";
import { selectForecastData } from "../../redux/weather.slice";

const RightMain = () => {
  const [isWeek, setIsWeek] = useState(true);

  const forecast = useSelector(selectForecastData);

  let forecastData = !isWeek ? [forecast[0]] : forecast;
  return (
    <RightMainContainer>
      <RightMainPrimary isWeek={isWeek} setIsWeek={setIsWeek} />
      <WeatherForecast weatherData={forecastData} />
      <WeatherHighlight />
    </RightMainContainer>
  );
};

export default RightMain;
