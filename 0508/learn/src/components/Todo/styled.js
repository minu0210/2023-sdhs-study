import styled from "styled-components";

import { Button } from "../Button/styled";

export const Container = styled.li`
  width: 90%;
  list-style: none;
  border-radius: 10px;
  box-shadow: 0 0 4.5px rgba(156, 156, 156, 0.6);
  display: flex;
  align-items: center;
  padding: 10px 16px;
  margin-top: 20px;
  justify-content: space-between;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;

> ${Button} {
  padding: 6px 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin: 0 4px;
  color: #fff;
  background: #ff968a;

  &:hover {
    background: #ff7d6f;
  }
`;

export const Title = styled.p`
  font-size: 16px;
`;
