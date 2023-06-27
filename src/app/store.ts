import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../redux/todoSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    todo: todoSlice
  },
  middleware: [logger]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch