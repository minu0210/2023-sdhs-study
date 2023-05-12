import * as S from "./styled";

import Todo from "../../../components/Todo";

function ItemList({ todos, searchValue, deleteTodo }) {
  // 7. 6에서 searchValue를 전달받았다.(검색창에 입력한 값)

  return (
    <S.ItemList>
      {todos
        // 8. filter 함수를 사용해준다
        //    includes로 todo의 name에 검색한 값이(searchValue) 있는지 확인한다.
        .filter((todo) => todo.name.includes(searchValue))
        .map(({ id, name }) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          };

          return (
            <Todo key={id} deleteTodo={handleDeleteTodo}>
              {name}
            </Todo>
          );
        })}
    </S.ItemList>
  );
}

export default ItemList;
