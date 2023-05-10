import styled from "styled-components";

import { Button } from "../../../components/Button/styled";

export const InputBox = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;

  ${Button} {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 6px 14px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: 6px;
    &:hover {
      background: #d6d6d6;
    }
    &:disabled {
      cursor: not-allowed;
    }
    &:disabled:hover {
      background: rgba(239, 239, 239, 0.3);
    }
  }
`;

export const Input = styled.input`
  flex-shrink: 0;
  width: 100%;
  padding: 4px 8px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 4.5px rgba(156, 156, 156, 0.6);
  &:focus {
    outline: none;
    box-shadow: 0 0 4.5px rgba(156, 156, 156, 1);
  }
`;
