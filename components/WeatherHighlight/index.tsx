import React from "react";
import {
  WeatherBox,
  WeatherBoxTitle,
  WeatherHighlightContainer,
  WeatherHighlightInfo,
  WeatherHighlightMainContainer,
  WeatherHighlightTitle,
} from "./WeatherHighlight.styles";
import VisibilityBox from "../VisibilityBox";
import HumidityBox from "../HumidityBox";
import WindStatus from "../WindStatus";
import UVIndex from "../UVIndex";
import SunRiseSet from "../SunRiseSet";
import { useSelector } from "react-redux";
import { selectUnit, selectWeatherData } from "../../redux/weather.slice";

const WeatherHighlight: React.FC = () => {
  const data = useSelector(selectWeatherData);
  const unit = useSelector(selectUnit);

  let feelsLikeTemp = unit === "cel" ? data.feelsLike.c : data.feelsLike.f;
  let feelsLikeUnit = unit === "cel" ? "C" : "F";
  return (
    <WeatherHighlightContainer>
      <WeatherHighlightTitle>Today's Highlight</WeatherHighlightTitle>
      <WeatherHighlightMainContainer>
        <UVIndex magnitude="12" title="UV Index" />{" "}
        <WindStatus
          magnitude={data.wind}
          unit="km/h"
          description="WSW"
          title="Wind Status"
        />{" "}
        <SunRiseSet
          sunriseTime={data.sunrise}
          sunsetTime={data.sunset}
          title="Sunrise & Sunset"
        />{" "}
        <HumidityBox
          magnitude={data.humidity}
          unit="%"
          description="Normal 👍🏻"
          title="Humidity"
        />{" "}
        <VisibilityBox
          magnitude={data.pressure}
          unit="pa"
          description="Okay ❤️"
          title="Pressure"
        />{" "}
        <HumidityBox
          magnitude={feelsLikeTemp}
          unit={`°${feelsLikeUnit}`}
          description="😇"
          title="Feels Like"
        />{" "}
      </WeatherHighlightMainContainer>
    </WeatherHighlightContainer>
  );
};

export default WeatherHighlight;
