import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  tasks : []
}

export const todoSlice  = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) =>{
        state.tasks.push(action.payload)
    },
    deleteTask: (state, action) =>{
        state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  },
})

export const { addTask, deleteTask} = todoSlice.actions

export default todoSlice.reducer