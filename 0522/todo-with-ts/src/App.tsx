import "./reset.css";
import * as S from "./styled";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";

import type { Todo } from "./types/todo";
import type { KeyboardEvent } from "react";

function App() {
    const [todoName, setTodoName] = useState<Todo["name"]>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedTodoIds, setSelectedTodoIds] = useState<Todo["id"][]>([]);
    const [editedTodoId, setEditedTodoId] = useState<Todo["id"] | undefined>();
    const [editedName, setEditedName] = useState<Todo["name"]>("");

    const handleTodoName = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setTodoName(value);
    };

    const handleSearchValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(value);
    };

    const handleDeleteTodo = (id: Todo["id"]) => {
        setTodos((prevState) => {
            const filterTodos = [...prevState].filter((todo) => todo.id !== id);
            return filterTodos;
        });
    };

    const addTodo = () => {
        setTodos((prevState) => [...prevState, { id: uuidv4(), name: todoName }]);
        setTodoName("");
    };

    const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && todoName.trim()) addTodo();
    };

    const toggleEditTodo = (id: Todo["id"]) => {
        setEditedTodoId((prevState) => (prevState === id ? undefined : id));
    };

    const handleEditedName = (name: Todo["name"]) => {
        setEditedName(name);
    };

    const editTodo = () => {
        setTodos((prevState) => {
            return prevState.map(({ id, name }) => {
                if (id === editedTodoId) {
                    return { id, name: editedName };
                }
                return { id, name };
            });
        });
        setEditedTodoId(undefined);
        setEditedName("");
    };

    return (
        <S.Container>
            <S.Wrap>
                <Input placeholder="할 일을 입력해주세요" value={todoName} onKeyUp={handleEnterPress} onChange={handleTodoName} />
                <Button onClick={addTodo} disabled={!todoName.trim()}>
                    Todo 추가
                </Button>
            </S.Wrap>
            <Input placeholder="검색할 내용을 입력해주세요" onChange={handleSearchValue} />
            <TodoList
                todos={todos}
                searchValue={searchValue}
                deleteTodo={handleDeleteTodo}
                setSelectedTodoIds={setSelectedTodoIds}
                selectedTodoIds={selectedTodoIds}
                editedTodoId={editedTodoId}
                toggleEditTodo={toggleEditTodo}
                setEditedName={handleEditedName}
                editTodo={editTodo}
            />
        </S.Container>
    );
}

export default App;
