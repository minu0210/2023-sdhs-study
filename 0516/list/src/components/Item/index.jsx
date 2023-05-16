import * as S from "./styled";

function Item(props) {
  const { id, name, level } = props;

  return (
    <S.Content>
      <S.Item>{id}</S.Item>
      <S.Item>{name}</S.Item>
      <S.Item>{level}</S.Item>
    </S.Content>
  );
}

export default Item;
