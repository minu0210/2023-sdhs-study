import Button from "../Button";
import Checkbox from "../Checkbox";

import * as S from "./styled";

function Todo(props) {
  const { deleteTodo, handleSelected } = props;

  return (
    <S.Container>
      <S.ContentWrap>
        <Checkbox onChange={handleSelected} />
        <S.Title>{props.children}</S.Title>
      </S.ContentWrap>
      <S.ButtonWrap>
        <Button className="delete" onClick={deleteTodo}>
          삭제
        </Button>
      </S.ButtonWrap>
    </S.Container>
  );
}

export default Todo;
