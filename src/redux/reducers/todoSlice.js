import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    filter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].text = action.payload.text;
      }
    },
    completeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, removeTodo, editTodo, completeTodo, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
