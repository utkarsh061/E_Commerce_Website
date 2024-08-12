import { configureStore, combineReducers } from "@reduxjs/toolkit";
import applicationSliceReducer from "./applicationSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    application:applicationSliceReducer
})
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const createStore = () => {
    return configureStore({
        reducer:persistedReducer
     })
}

 export default createStore;