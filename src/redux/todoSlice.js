import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
