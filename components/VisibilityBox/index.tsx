import React from "react";
import styled from "styled-components";

// Styled components
const VisibilityBoxContainer = styled.div`
  padding: 16px;
  background: #fff;
  min-height: 180px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VisibilityBoxTitle = styled.p`
  font-size: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;
`;

const VisibilityHighlightInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VisibilityHighlightInfoDetailBox = styled.div`
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
  font-size: 16px;
  color: #202020;
`;

const VisibilityBox: React.FC<{
  title: string;
  magnitude: string;
  description: string;
  unit: string;
}> = ({ title, magnitude, description, unit }) => {
  return (
    <VisibilityBoxContainer>
      <VisibilityBoxTitle>{title}</VisibilityBoxTitle>
      <VisibilityHighlightInfoBox>
        <VisibilityHighlightInfoDetailBox>
          <Magnitude>{magnitude}</Magnitude>
          <Unit>{unit}</Unit>
        </VisibilityHighlightInfoDetailBox>
        <Description>{description}</Description>
      </VisibilityHighlightInfoBox>
    </VisibilityBoxContainer>
  );
};

export default VisibilityBox;
