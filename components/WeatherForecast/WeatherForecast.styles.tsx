import styled from "styled-components";
import WeatherIcon from "../WeatherIcon";

export const ForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

export const DayCard = styled.div`
  padding: 12px;
  border-radius: 16px;
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const DayText = styled.div`
  font-weight: 400;
  color: #3b3b3b;
  font-size: 14px;
`;

export const TempContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const MinTempText = styled.div`
  font-size: 10px;
  color: #c6c6c6;
  font-weight: 600;
`;

export const MaxTempText = styled.div`
  font-size: 10px;
  color: #2b2b2b;
  font-weight: 600;
`;

export const WeatherWidgetIcon = styled(WeatherIcon)`
  width: 40px;
  height: 40px;
`;
