import { combineReducers, configureStore } from "@reduxjs/toolkit"
import reportReducer from '../reducers/reportReducer'

const mainReducer = combineReducers({
    reportArray: reportReducer,
  })
  
  const store = configureStore({
    reducer: mainReducer,
  })
  
  export type RootState = ReturnType<typeof mainReducer>
    
  export default store