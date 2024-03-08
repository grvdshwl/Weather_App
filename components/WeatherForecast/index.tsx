import React from "react";
import {
  DayCard,
  ForecastContainer,
  MaxTempText,
  MinTempText,
  DayText,
  TempContainer,
} from "./WeatherForecast.styles";
import { useSelector } from "react-redux";
import { selectUnit } from "../../redux/weather.slice";
import Image from "next/image";

interface WeatherData {
  id: number;
  day: string;
  condition: any;
  minTemp: any;
  maxTemp: any;
}

const WeatherForecast: React.FC<{ weatherData: WeatherData[] }> = ({
  weatherData,
}) => {
  const unit = useSelector(selectUnit);

  return (
    <ForecastContainer>
      {weatherData.map(({ day, condition, minTemp, maxTemp }) => {
        let minTempVal = unit === "cel" ? minTemp.c : minTemp.f;
        let maxTempVal = unit === "cel" ? maxTemp.c : maxTemp.f;
        let tempUnit = unit === "cel" ? "C" : "F";
        return (
          <DayCard key={day}>
            <DayText>{day}</DayText>
            <Image
              src={`http:${condition.icon}`}
              style={{ width: "60px", height: "60px" }}
              alt="icon-weather"
              width={60}
              height={60}
            />
            <TempContainer>
              <MaxTempText>
                {maxTempVal}&deg;{tempUnit}
              </MaxTempText>
              <MinTempText>
                {minTempVal}&deg;{tempUnit}
              </MinTempText>
            </TempContainer>
          </DayCard>
        );
      })}
    </ForecastContainer>
  );
};

export default WeatherForecast;
