import styled from "styled-components";
import { Button } from "../../components/Button/styled";

export const Container = styled.div`
    margin: 200px auto;
    width: 600px;
    height: 580px;
    border: 3px solid #ccc;
    border-radius: 6px;
    box-shadow: 5px 5px 5px rgba(156, 156, 156, 0.8);

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    > ${Button} {
        width: 360px;
        height: 50px;
        font-size: 1.1em;
        font-weight: bold;
        background: skyblue;
        color: #fff;
        margin-top: 40px;

        &:hover {
            background: rgb(168, 216, 235);
        }
    }
`;

export const Title = styled.h1`
    padding: 30px;
`;

export const Notice = styled.p``;
