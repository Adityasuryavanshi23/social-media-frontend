


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { reducer } from "./rootReducer";
export const persistConfig = {
  key: "persistStore",
  storage: sessionStorage,
  whitelist: [
    "login",
  ]}

const rootReducer = combineReducers({ ...reducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);