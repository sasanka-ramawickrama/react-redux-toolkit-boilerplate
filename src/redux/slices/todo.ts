import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AsyncStateObject, TodoItem } from '../../interfaces/'
import { fetchTodoList } from '../actions/'

const initialState: AsyncStateObject<Array<TodoItem>> = {
    isLoading: false,
    data: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoItem>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data.push(action.payload)
        },
        updateTodo: (state, action: PayloadAction<TodoItem>) => {
            const index = state.data.findIndex(i => i.id === action.payload.id)
            const updatedTodo: TodoItem = {
                ...action.payload,
                isCompleted: !action.payload.isCompleted
            }
            state.data[index] = updatedTodo
        },
        deleteTodo: (state, action: PayloadAction<TodoItem>) => {
            const index = state.data.findIndex(i => i.id === action.payload.id)
            state.data.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodoList.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchTodoList.fulfilled, (state, action: PayloadAction<TodoItem[]>) => {
            state.isLoading = false
            state.data = action.payload
        })
    }
})

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
