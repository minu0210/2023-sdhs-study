import type { Todo as TodoType } from "../../types/todo";
import type { ChangeEvent, KeyboardEvent } from "react";

import * as S from "./styled";

import Button from "../Button";
import Input from "../Input";

interface TodoProps {
    name: TodoType["name"];
    isEdited: boolean;
    deleteTodo: () => void;
    handleSelected: (checked: boolean) => void;
    onClick: () => void;
    toggleEditTodo: () => void;
    setEditedName: (name: TodoType["name"]) => void;
    editTodo: () => void;
}

function Todo({ name, deleteTodo, onClick, toggleEditTodo, isEdited, setEditedName, editTodo }: TodoProps) {
    const handleEditedName = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setEditedName(value);
    };

    const handleEditEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") editTodo();
    };

    return (
        <S.Wrap>
            <S.List onClick={onClick}>
                {isEdited ? <Input onKeyUp={handleEditEnter} defaultValue={name} onChange={handleEditedName} autoFocus /> : <span>{name}</span>}
            </S.List>
            <S.ButtonWrap>
                <Button onClick={deleteTodo}>삭제</Button>
                <Button onClick={toggleEditTodo}>{isEdited ? "취소" : "수정"}</Button>
                {isEdited && <Button onClick={editTodo}>저장</Button>}
            </S.ButtonWrap>
        </S.Wrap>
    );
}

export default Todo;
