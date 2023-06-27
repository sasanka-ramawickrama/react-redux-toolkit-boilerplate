import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoItem } from '../interfaces/todo'

const initialState: Array<TodoItem> = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoItem>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.push(action.payload)
        },
        updateTodo: (state, action: PayloadAction<TodoItem>) => {
            const index = state.findIndex(i => i.id === action.payload.id)
            const updatedTodo: TodoItem = {
                ...action.payload,
                isCompleted: !action.payload.isCompleted
            }
            state[index] = updatedTodo
        },
        deleteTodo: (state, action: PayloadAction<TodoItem>) => {
            const index = state.findIndex(i => i.id === action.payload.id)
            state.splice(index, 1)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
