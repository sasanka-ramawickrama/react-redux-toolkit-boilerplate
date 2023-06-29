import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todo'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    todo: todoSlice
  },
  middleware: [thunk, logger]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch