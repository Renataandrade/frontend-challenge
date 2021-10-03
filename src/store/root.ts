import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import authReducer from './auth'
import fallbackReducer from './fallbacks'
import purchaseReducer from './purchase'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    purchase: purchaseReducer,
    fallbacks: fallbackReducer
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
