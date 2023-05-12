import styled from "styled-components";

export const SearchInput = styled.input`
  border: none;
  width: 40%;
  padding: 6px 8px;
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 0 0 4.5px rgba(156, 156, 156, 0.6);
  &:focus {
    outline: none;
    box-shadow: 0 0 4.5px rgba(156, 156, 156, 1);
  }
`;
