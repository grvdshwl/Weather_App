import React from "react";
import styled from "styled-components";

const HumidityBoxContainer = styled.div`
  padding: 16px;
  background: #fff;
  min-height: 180px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HumidityBoxTitle = styled.p`
  font-size: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;
`;

const HumidityHighlightInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HumidityHighlightInfoDetailBox = styled.div`
  display: flex;
  gap: 4px;
`;

const Magnitude = styled.p`
  font-size: 42px;
  font-weight: bold;
  font-weight: 400;
`;

const Unit = styled.sub`
  font-size: 16px;
  font-weight: bold;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 16px;
  color: #202020;
`;

const HumidityBox: React.FC<{
  title: string;
  magnitude: string;
  description: string;
  unit: string;
}> = ({ title, magnitude, description, unit }) => {
  return (
    <HumidityBoxContainer>
      <HumidityBoxTitle>{title}</HumidityBoxTitle>
      <HumidityHighlightInfoBox>
        <HumidityHighlightInfoDetailBox>
          <Magnitude>{magnitude}</Magnitude>
          <Unit>{unit}</Unit>
        </HumidityHighlightInfoDetailBox>
        <Description>{description}</Description>
      </HumidityHighlightInfoBox>
    </HumidityBoxContainer>
  );
};

export default HumidityBox;
