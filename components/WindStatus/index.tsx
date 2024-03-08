import React from "react";
import { FaRegCompass } from "react-icons/fa";
import styled from "styled-components";

const WindStatusContainer = styled.div`
  padding: 16px;
  background: #fff;
  min-height: 180px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WindStatusTitle = styled.p`
  font-size: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;
`;

const WindStatusInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WindStatusInfoDetailBox = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
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
  font-size: 14px;
  color: #202020;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const WindStatus: React.FC<{
  title: string;
  magnitude: string;
  description: string;
  unit: string;
}> = ({ title, magnitude, description, unit }) => {
  return (
    <WindStatusContainer>
      <WindStatusTitle>{title}</WindStatusTitle>
      <WindStatusInfoBox>
        <WindStatusInfoDetailBox>
          <Magnitude>{magnitude}</Magnitude>
          <Unit>{unit}</Unit>
        </WindStatusInfoDetailBox>
        <Description>
          <FaRegCompass size={16} color="#3c4bd1" />
          {description}
        </Description>
      </WindStatusInfoBox>
    </WindStatusContainer>
  );
};

export default WindStatus;
