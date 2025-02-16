import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { reducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index'; // You'll need to create this file

const sagaMiddleware = createSagaMiddleware();

export const persistConfig = {
  key: "persistStore",
  storage: sessionStorage,
  whitelist: [
    "login",
  ]
}

const rootReducer = combineReducers({ ...reducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    sagaMiddleware
  ],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
