import { CiSearch } from "react-icons/ci";
import { MdOutlineLocationSearching } from "react-icons/md";
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const SearchBarSearchIcon = styled(CiSearch)`
  color: #000;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SearchBarMainInput = styled.input`
  width: 80%;
  border: none;
  outline: none;
  padding: 8px;
  &::placeholder {
    color: #000;
  }
`;

export const SearchBarCurrentLocationContainer = styled.div`
  padding: 10px;
  background: #f6f6f8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SearchBarCurrentLocationIcon = styled(MdOutlineLocationSearching)`
  color: #000;
  width: 16px;
  height: 16px;
`;
