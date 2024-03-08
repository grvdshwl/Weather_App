import styled from "styled-components";

export const WeatherHighlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const WeatherHighlightTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
export const WeatherHighlightMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const WeatherBox = styled.div`
  padding: 16px;
  background: #fff;
  min-height: 180px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const WeatherBoxTitle = styled.p`
  font-size: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;
`;

const WeatherHighlightInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WeatherHighlightInfoDetailBox = styled.div`
  display: flex;
  gap: 8px;
`;

const Magnitude = styled.p`
  font-size: 42px;
  font-weight: bold;
  font-weight: 400;
`;

const Unit = styled.sub`
  font-size: 20px;
  font-weight: bold;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 16px;
  color: #202020;
`;

export const WeatherHighlightInfo: React.FC<{
  magnitude: string;
  description: string;
  unit: string;
}> = ({ magnitude, description, unit }) => {
  return (
    <WeatherHighlightInfoBox>
      <WeatherHighlightInfoDetailBox>
        <Magnitude>{magnitude}</Magnitude>
        <Unit>{unit}</Unit>
      </WeatherHighlightInfoDetailBox>
      <Description>{description}</Description>
    </WeatherHighlightInfoBox>
  );
};
