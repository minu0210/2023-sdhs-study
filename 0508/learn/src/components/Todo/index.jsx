import Button from "../Button";

import * as S from "./styled";

function Todo() {
  return (
    <S.Container>
      <S.Title></S.Title>
      <Button>중요</Button>
      <Button>삭제</Button>
    </S.Container>
  );
}

export default Todo;
