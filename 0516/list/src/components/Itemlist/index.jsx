import { useState } from "react";
import * as S from "./styled";
import data from "../../data";
import Item from "../Item";
import Button from "../Button";

function ItemList() {
  const [list, setList] = useState(data.data);

  const ascendingId = () => {
    let copy = [...data.data];
    let result = copy.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
    setList(result);
  };

  const descendingId = () => {
    let copy = [...data.data];
    let result = copy.sort((a, b) => {
      if (a.id < b.id) return 1;
      if (a.id > b.id) return -1;
      return 0;
    });
    setList(result);
  };

  const ascendingLevel = () => {
    let copy = [...data.data];
    let result = copy.sort((a, b) => {
      if (a.level === b.level) {
        if (a.id < b.id) return -1;
        else return 1;
      }
      if (a.level === undefined) return -1;
      if (a.level < b.level) return 1;
      if (a.level > b.level) return -1;
      return 0;
    });
    setList(result);
  };

  const ascendingName = () => {
    let copy = [...data.data];
    let result = copy.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setList(result);
  };

  const descendingName = () => {
    let copy = [...data.data];
    let result = copy.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    setList(result);
  };

  return (
    <>
      <S.ButtonWrap>
        <Button onClick={ascendingId}>ID 오름차순</Button>
        <Button onClick={descendingId}>ID 내림차순</Button>
        <Button onClick={ascendingLevel}>LEVEL 오름차순</Button>
        <Button onClick={ascendingName}>NAME 오름차순</Button>
        <Button onClick={descendingName}>NAME 내림차순</Button>
      </S.ButtonWrap>
      <S.ListWrap>
        <Item id="ID" name="NAME" level="LEVEL"></Item>
        <S.Line />
        {list.map(({ id, name, level }) => {
          return (
            <Item key={id} id={id} name={name} level={level || "없음"}></Item>
          );
        })}
      </S.ListWrap>
    </>
  );
}

export default ItemList;
