import * as S from "./styled";
import ItemList from "../../components/Itemlist";

function Main(props) {
  return (
    <S.Container>
      <S.Wrap>
        <ItemList />
      </S.Wrap>
    </S.Container>
  );
}

export default Main;
