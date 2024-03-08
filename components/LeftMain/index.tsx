"use client";
import React from "react";
import { LeftMainContainer } from "./LeftMain.styles";
import SearchBar from "../SearchBar";
import LeftWidget from "../LeftWidget";

const LeftMain = () => {
  return (
    <LeftMainContainer>
      <SearchBar />
      <LeftWidget />
    </LeftMainContainer>
  );
};

export default LeftMain;
