import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FallbackType, IFallbackStore } from '../../models/Fallback';

export const initialState: IFallbackStore = {}

export const fallbackSlice = createSlice({
  name: 'fallbacks',
  initialState,
  reducers: {
    fetchFallback: (state, action: PayloadAction<FallbackType>) => {
      state.page = action.payload
    }
  }
});

export const { fetchFallback } = fallbackSlice.actions;

export default fallbackSlice.reducer;