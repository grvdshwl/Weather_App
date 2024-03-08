"use client";
import React from "react";
import {
  AppLoadingSpinner,
  AppMainContainer,
  LoadingText,
  LoadingTextBox,
} from "./AppMain.styles";
import LeftMain from "../LeftMain";
import RightMain from "../RightMain";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/weather.slice";
import Toast from "../Toast";

const AppMain = () => {
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return (
      <LoadingTextBox>
        <AppLoadingSpinner />
        <LoadingText>Loading...</LoadingText>
      </LoadingTextBox>
    );
  }
  return (
    <AppMainContainer>
      <LeftMain />
      <RightMain />
      <Toast />
    </AppMainContainer>
  );
};

export default AppMain;
