import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import authReducer from './slices/userSlice'
import alertReducer from './slices/alertSlice'

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export default store;