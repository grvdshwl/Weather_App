import styled from "styled-components";

export const RightMainPrimaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const RightMainPrimaryWeekContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

interface RightMainPrimaryWeekProps {
  selected: boolean;
}

export const RightMainPrimaryWeek = styled.div<RightMainPrimaryWeekProps>`
  color: ${(props) => (props.selected ? "#000" : "#d2d2d2")};
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  padding: 4px;
  border-bottom: ${(props) =>
    props.selected ? "1px solid #000" : "1px solid transparent"};
`;

export const RightMainPrimaryUnitContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

interface RightMainPrimaryUnitProps {
  selected: boolean;
}

export const RightMainPrimaryUnit = styled.div<RightMainPrimaryUnitProps>`
  color: ${(props) => (!props.selected ? "#000" : "#fff")};
  background: ${(props) => (!props.selected ? "#fff" : "#000")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 12px;
  border-radius: 15px;
  cursor: pointer;
`;
export const RightMainPrimaryProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 10px;
  margin-left: 12px;
`;
