import styled from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 5px;
  &:hover {
    background: #d6d6d6;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled:hover {
    background: rgba(239, 239, 239, 0.3);
  }
`;
