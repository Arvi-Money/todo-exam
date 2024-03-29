import { createSlice } from '@reduxjs/toolkit'



export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: []
  },
  reducers: {
      add: (state, action) => {
        state.todo.push(action.payload)
      },
      remove: (state, action) => {
        state.todo = state.todo.filter(todo => {
          return todo.id !== action.payload;
        })
      },
    
      }
  })

export const {add, remove} = todoSlice.actions
export default todoSlice.reducer