import { InputHTMLAttributes } from "react";
// // 1번째 type과 interface 차이

// // 1 - type: 단일 형식, 오브젝트 형식 모두 가능
// type Color = string; // 단일 형식
// type MyType = { color: Color /* =string */ }; // 오브젝트 형식

// // 2 - interface: 오브젝트 형식만 가능
// interface MyInterface { // 오브젝트 형식만 가능
//     color: string;
// }
// const MyData2: MyInterface = { color: "red" };

// 2번째 type과 interface 차이
// type: |(or) &(and) 연산자를 사용 할 수 있음
type OpacityData = { opacity: number };
type MyType = { color: string };
// | > or => 둘 중 하나만 들어가도 됨
// & > and => 둘 다 반드시 들어가야 함
type MyMixType = MyType | OpacityData;
// MyType 또는 OpacityData
const data: MyMixType = { color: "red", opacity: 1 };

// interface: 부모 인터페이스로부터 extends(상속)을 사용할 수 있음
interface MyOpacity {
    opacity: number;
}
interface MyInterface extends MyOpacity {
    color: string;
}

const data2: MyInterface = { color: "red", opacity: 1 };

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    color?: string; // (= | undefined);
}

function Input(props: InputProps) {
    // props.color = 'red';
    return <input {...props} />;
}

export default Input;
