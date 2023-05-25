import type { Todo as TodoType } from "../../types/todo";

import Button from "../Button";

interface TodoProps {
    name: TodoType["name"];
    deleteTodo: () => void;
    handleSelected: (checked: boolean) => void;
}

function Todo({ name, deleteTodo, handleSelected }: TodoProps) {
    return (
        <li>
            <span>{name}</span>
            <Button onClick={deleteTodo}>삭제</Button>
        </li>
    );
}

export default Todo;
