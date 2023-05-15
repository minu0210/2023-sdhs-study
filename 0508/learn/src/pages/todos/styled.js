import styled from "styled-components";

import { Button } from "../../components/Button/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 60vw;
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
  ${Button} {
    border: none;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 10px;
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

export const Title = styled.h2``;
