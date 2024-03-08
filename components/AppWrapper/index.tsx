"use client";

import React, { ReactNode } from "react";
import { AppWrapperContainer } from "./AppWrapper.styles";
interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return <AppWrapperContainer>{children}</AppWrapperContainer>;
};

export default AppWrapper;
