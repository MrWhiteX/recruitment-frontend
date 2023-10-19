import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasks";
import { localStorageMiddleware } from "./middleware";

const preloadedState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
