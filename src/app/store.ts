import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import chartSlice from '../features/chartSlice';

export const store = configureStore({
  reducer: {
    chart: chartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
