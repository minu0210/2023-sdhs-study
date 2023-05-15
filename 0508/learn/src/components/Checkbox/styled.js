import styled from "styled-components";

export const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 4.5px rgba(156, 156, 156, 0.6);
  cursor: pointer;
  transition: 0.3s;
  &:checked {
    background: #77dd77;
  }
  &:active {
    transform: scale3d(1.1, 1.1, 1.1);
  }
`;
