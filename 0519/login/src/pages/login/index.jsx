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

    const checkName = ({ name }) => {
        console.log(name);
        // const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
        // if (regExp.test(name.target.value)) alert("특수문자는 사용할 수 없습니다.");
        // // else notice.textContent = " ";
        // if (name.target.value.length < 2 || name.target.value.length > 5) alert("이름은 2글자 이상 5글자 이하만 입력할 수 있습니다.");
    };

    const checkId = (e) => {};
    const checkPw = (e) => {};

    const loadMain = () => {
        navigate("/main");
    };

    return (
        <S.Container>
            <S.Title>로그인</S.Title>
            <Input type="text" placeholder="이름" value={name}></Input>
            <Input type="text" placeholder="아이디" value={id}></Input>
            <Input type="password" placeholder="비밀번호" value={password}></Input>
            <Button onClick={checkName}>로그인</Button>
        </S.Container>
    );
}

export default Login;
