import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import authReducer from './userSlice'

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer
});

export default store;