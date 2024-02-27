import { configureStore } from '@reduxjs/toolkit'
import reportReducer from '../reducers/reportReducer'
import infoReducer from '../reducers/infoReducer'
import articleReducer from '../reducers/articleReducer'
import blogReducer from '../reducers/blogReducer'

export const store = configureStore({
  reducer: {
    reports: reportReducer,
    INFO: infoReducer,
    articles: articleReducer,
    blogs: blogReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch