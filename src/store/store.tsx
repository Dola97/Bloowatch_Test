import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import Thunk from "redux-thunk";
import storage from "./storage";
// import storage from "redux-persist/lib/storage";
import cartReducer from "./cart-slice/cart-slice";
import filterReducer from "./filter-slice/filter-slice";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
  devTools: process.env.NODE_ENV !== "production",
};
const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer,
});
const middleware = [Thunk];

export type RootState = ReturnType<typeof rootReducer>;

let persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});

const persistor = persistStore(store);

export { store, persistor };
