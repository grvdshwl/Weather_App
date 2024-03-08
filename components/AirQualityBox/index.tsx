import React from "react";
import styled from "styled-components";

const AirQualityBoxContainer = styled.div`
  padding: 16px;
  background: #fff;
  min-height: 180px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AirQualityBoxTitle = styled.p`
  font-size: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;
`;

const AirQualityHighlightInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AirQualityHighlightInfoDetailBox = styled.div`
  display: flex;
  gap: 8px;
`;

const Magnitude = styled.p`
  font-size: 42px;
  font-weight: bold;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 16px;
  color: #202020;
`;

const AirQualityBox: React.FC<{
  title: string;
  magnitude: string;
  description: string;
}> = ({ title, magnitude, description }) => {

  return (
    <AirQualityBoxContainer>
      <AirQualityBoxTitle>{title}</AirQualityBoxTitle>
      <AirQualityHighlightInfoBox>
        <AirQualityHighlightInfoDetailBox>
          <Magnitude>{magnitude}</Magnitude>
        </AirQualityHighlightInfoDetailBox>
        <Description>{description}</Description>
      </AirQualityHighlightInfoBox>
    </AirQualityBoxContainer>
  );
};

export default AirQualityBox;
