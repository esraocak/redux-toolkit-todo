import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: [{id:null, text:null, completed:false}]

}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state,action) => {
        const newTodo = {
            id: Date.now(),
            title: action.payload.title,
            completed: false
        }
        state.push(newTodo);
    },

    toggleComplete: (state,action) => {
        const index = state.findIndex(
            (todo) => todo.id === action.payload.id
        );
        state[index].completed = action.payload.completed;
    },

    deleteTodo: (state,action) => {
        return state.filter((todo)=> todo.id !== action.payload.id)
    },

    clearList: (state) => {
        state.todo = [];

    },

  },
});

export const {addTodo, toggleComplete, deleteTodo, clearList} = todoSlice.actions;

export default todoSlice.reducer;