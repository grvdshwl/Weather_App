import styled, { keyframes } from "styled-components";

export const AppMainContainer = styled.div`
  width: 90%;
  height: 95%;
  z-index: 2;
  display: flex;
  flex-direction: row;
`;

export const Spinner = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-left-color: transparent;
  border-radius: 15px;
  width: 25px;
  height: 25px;
  animation: spinAnimation 0.75s linear infinite;

  @keyframes spinAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const AppLoadingSpinner = styled.div`
  border: 2px solid #000;
  border-left-color: transparent;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  animation: spinAnimation 0.75s linear infinite;

  @keyframes spinAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.p`
  font-size: 20px;
  color: #262626;
`;
