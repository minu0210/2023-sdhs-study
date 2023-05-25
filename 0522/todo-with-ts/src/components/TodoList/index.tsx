import type { DispatchSetStateAction } from "../../types/util";
import type { Todo as TodoType } from "../../types/todo";
import Todo from "../Todo";
import * as S from "./styled";

interface TodoListProps {
    todos: TodoType[];
    searchValue: string;
    deleteTodo: (id: TodoType["id"]) => void;
    setSelectedTodoIds: DispatchSetStateAction<TodoType["id"][]>;
    editedTodoId: TodoType["id"] | undefined;
    selectedTodoIds: TodoType["id"][];
    toggleEditTodo: (id: TodoType["id"]) => void;
    setEditedName: (name: TodoType["name"]) => void;
    editTodo: () => void;
}

function TodoList({
    todos,
    searchValue,
    deleteTodo,
    setSelectedTodoIds,
    selectedTodoIds,
    toggleEditTodo,
    editedTodoId,
    setEditedName,
    editTodo,
}: TodoListProps) {
    // const clickEvent = () => {
    //     document.querySelector("ul")?.addEventListener("click", (e: Event) => {
    //         {handleSelected};
    //     });
    // };

    return (
        <S.Ul>
            {todos
                .filter((todo) => todo.name.includes(searchValue))
                .map(({ id, name }) => {
                    const handleDeleteTodo = () => {
                        deleteTodo(id);
                    };

                    const handleSelected = (checked: boolean) => {
                        if (checked) {
                            setSelectedTodoIds((prevState) => [...prevState, id]);
                        } else {
                            setSelectedTodoIds((prevState) => prevState.filter((prevId) => prevId !== id));
                        }
                        console.log({ id, checked });
                    };

                    const handleOnClick = () => {
                        setSelectedTodoIds((prevState) => {
                            if (prevState.includes(id)) {
                                return prevState.filter((v) => v !== id);
                            }

                            return [...prevState, id];
                        });
                    };

                    const handleEditTodo = () => {
                        toggleEditTodo(id);
                    };

                    const isEdited = editedTodoId === id;

                    return (
                        <Todo
                            key={id}
                            name={name}
                            isEdited={isEdited}
                            deleteTodo={handleDeleteTodo}
                            handleSelected={handleSelected}
                            onClick={handleOnClick}
                            toggleEditTodo={handleEditTodo}
                            setEditedName={setEditedName}
                            editTodo={editTodo}
                        />
                    );
                })}
        </S.Ul>
    );
}

export default TodoList;
