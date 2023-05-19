import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 3px solid #ccc;
  padding: 10px;
  width: 400px;
  font-size: 1.1em;
  margin: 20px 0;

  &:hover,
  &:focus {
    border-bottom: 3px solid skyblue;
  }
`;
