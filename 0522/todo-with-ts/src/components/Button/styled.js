import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    background: rgb(235, 235, 235);
    padding: 4px 8px;
    margin: 10px 4px 10px 10px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgba(172, 172, 172, 0.5);
    &:hover {
        // background: rgb(235, 235, 235);
    }
    &:disabled {
        cursor: not-allowed;
    }
    &:disabled:hover {
        background: rgb(235, 235, 235);
    }
`;
