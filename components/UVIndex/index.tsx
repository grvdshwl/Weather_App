import React from "react";
import styled from "styled-components";

const UVIndexContainer = styled.div`
  padding: 16px;
  background: #fff;
  min-height: 180px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UVIndexTitle = styled.p`
  font-size: 16px;
  color: #b6b6b6;
`;

const UVIndexInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const UVIndexInfoDetailBox = styled.div`
  gap: 8px;
  padding: 12px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 28px;
`;
const SemiCircleContainer = styled.div``;
const SemiCircle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 140px; /* Adjust width as needed */
  height: 140px; /* Adjust height as needed */
  border: 10px solid #f3f3f4; /* Thickness and color of the border */
  border-radius: 50%; /* Border-radius to create a circle */
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
`;

const Magnitude = styled.p`
  font-size: 36px;
  font-weight: bold;
  font-weight: 400;
`;

const UVIndex: React.FC<{
  title: string;
  magnitude: string;
}> = ({ title, magnitude }) => {
  return (
    <UVIndexContainer>
      <UVIndexTitle>{title}</UVIndexTitle>
      <UVIndexInfoBox>
        <SemiCircleContainer>
          <SemiCircle />
        </SemiCircleContainer>
        <UVIndexInfoDetailBox>
          <Magnitude>{magnitude}</Magnitude>
        </UVIndexInfoDetailBox>
      </UVIndexInfoBox>
    </UVIndexContainer>
  );
};

export default UVIndex;
