import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {reportReducer} from "../reducers/ReportsReducer"
import { infoReducer } from "../reducers/InfoReducers"
import { articlesReducer } from "../reducers/ArticlesReducer"
import { blogReducer } from "../reducers/BlogsReducer"

const mainReducer = combineReducers({
reportArray:  reportReducer,
infoArray:  infoReducer,
articlesArray : articlesReducer,
blogsArray : blogReducer
})

const store = configureStore({
    reducer: mainReducer
})

export default store