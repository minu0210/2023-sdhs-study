import { InputHTMLAttributes } from "react";
import * as S from "./styled";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return <S.Input {...props} />;
}

export default Input;
