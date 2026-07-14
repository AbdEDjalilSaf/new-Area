import { configureStore } from '@reduxjs/toolkit';
import initialReducer from './initialSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      initial: initialReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];