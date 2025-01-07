import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { answerReducer } from 'features/completeTask';
import { createTaskReducer } from 'features/createTask';
import { LoginReducer } from 'features/login';

const rootReducer = combineReducers({
  loginSlice: LoginReducer,
  answerSlice: answerReducer,
  createTaskSlice: createTaskReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(authApi.middleware).concat(eventApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
