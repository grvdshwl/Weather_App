import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const SunRiseSetContainer = styled.div`
  padding: 16px;
  background: #fff;
  min-height: 180px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SunRiseSetBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  font-size: 16px;
  color: #b6b6b6;
  margin-bottom: 12px;
`;

const SunRiseSetInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Time = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #696969;
`;

const CustomIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffca5c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Component
const SunRiseSet: React.FC<{
  title: string;
  sunriseTime: string;
  sunsetTime: string;
}> = ({ title, sunriseTime, sunsetTime }) => {
  return (
    <SunRiseSetContainer>
      <Title>{title}</Title>
      <SunRiseSetBox>
        <SunRiseSetInfoBox>
          <CustomIcon>
            <FaArrowUp color="#fff" size={12} />
          </CustomIcon>
          <Time>{sunriseTime}</Time>
        </SunRiseSetInfoBox>
      </SunRiseSetBox>
      <SunRiseSetBox>
        <SunRiseSetInfoBox>
          <CustomIcon>
            <FaArrowDown color="#fff" size={12} />
          </CustomIcon>
          <Time>{sunsetTime}</Time>
        </SunRiseSetInfoBox>
      </SunRiseSetBox>
    </SunRiseSetContainer>
  );
};

export default SunRiseSet;
