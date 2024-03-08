"use client";
import React from "react";
import {
  RightMainPrimaryContainer,
  RightMainPrimaryProfileImage,
  RightMainPrimaryUnit,
  RightMainPrimaryUnitContainer,
  RightMainPrimaryWeek,
  RightMainPrimaryWeekContainer,
} from "./RightMainPrimary.styles";
import { mockUserImage } from "../mocks";
import { useDispatch, useSelector } from "react-redux";
import { selectUnit, setUnit } from "../../redux/weather.slice";

const RightMainPrimary: React.FC<{ isWeek: boolean; setIsWeek: any }> = ({
  isWeek,
  setIsWeek,
}) => {
  const unit = useSelector(selectUnit);
  const dispatch = useDispatch();
  let isCelcius = unit === "cel";

  const handleUnitFarh = () => {
    if (unit === "cel") {
      dispatch(setUnit("fah"));
    }
  };

  const handleUnitCel = () => {
    if (unit !== "cel") {
      dispatch(setUnit("cel"));
    }
  };

  return (
    <RightMainPrimaryContainer>
      <RightMainPrimaryWeekContainer>
        <RightMainPrimaryWeek
          selected={!isWeek}
          onClick={() => setIsWeek(false)}
        >
          Today
        </RightMainPrimaryWeek>
        <RightMainPrimaryWeek selected={isWeek} onClick={() => setIsWeek(true)}>
          Week
        </RightMainPrimaryWeek>
      </RightMainPrimaryWeekContainer>
      <RightMainPrimaryUnitContainer>
        <RightMainPrimaryUnit selected={isCelcius} onClick={handleUnitCel}>
          °C
        </RightMainPrimaryUnit>
        <RightMainPrimaryUnit selected={!isCelcius} onClick={handleUnitFarh}>
          °F
        </RightMainPrimaryUnit>
        <RightMainPrimaryProfileImage src={mockUserImage} alt="User" />
      </RightMainPrimaryUnitContainer>
    </RightMainPrimaryContainer>
  );
};

export default RightMainPrimary;
