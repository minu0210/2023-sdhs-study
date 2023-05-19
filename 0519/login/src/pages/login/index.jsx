import * as S from "./styled";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Login({ props, name, id, password }) {
    const [loginValue, setLoginValue] = useState({
        name: "",
        id: "",
        password: "",
    });

    const navigate = useNavigate();

    const notice = document.querySelector("p");

    const checkName = (e) => {
        console.log(e.target.value);
        const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
        if (regExp.test(e.target.value)) console.log("특수문자는 사용할 수 없습니다.");
        // else notice.textContent = " ";
        if (e.target.value.length < 2 || e.target.value.length > 5) notice.textContent = "이름은 2글자 이상 5글자 이하만 입력할 수 있습니다.";
    };

    const checkId = (e) => {};
    const checkPw = (e) => {};

    const loadMain = () => {
        navigate("/main");
    };

    return (
        <S.Container>
            <S.Title>로그인</S.Title>
            <Input type="text" placeholder="이름" onChange={checkName} value={name}></Input>
            <S.Notice>{props}</S.Notice>
            <Input type="text" placeholder="아이디" onChange={checkId} value={id}></Input>

            <Input type="password" placeholder="비밀번호" onChange={checkPw} value={password}></Input>

            <Button onClick={loadMain}>로그인</Button>
        </S.Container>
    );
}

export default Login;
