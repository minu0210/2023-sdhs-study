import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

// reducer
const todosSlice = createSlice({
  // reducer name
  name: "todos",
  // reducer의 초기값
  initialState,
  // reducer의 action들
  // todos의 데이터들
  reducers: {
    setTodos: (state, action) => {
      const { payload } = action;
      state.todos = payload;
    },
    createTodo: (state, action) => {
      const { payload } = action;
      state.todos = [...state.todos, payload];
    },
    // payload가 id로 넘어올 때
    deleteTodo: (state, action) => {
      const { payload } = action;
      state.todos = state.todos.filter((v) => v.id !== payload.id);
    },
    // payload가 id array로 넘어올 때
    deleteSelectedTodos: (state, action) => {
      const { payload } = action;
      state.todos = state.todos.filter(
        (todo) => !payload.selectedTodoIds.includes(todo.id)
      );
    },
  },
});

export const { setTodos, createTodo, deleteTodo, deleteSelectedTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
