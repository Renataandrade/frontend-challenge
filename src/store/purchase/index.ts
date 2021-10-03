import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPurchaseResponse } from '../../models/Purchase';

export const initialState: IPurchaseResponse = {
  page: 0,
  per_page: 0,
  total_pages: 0,
  data: []
}

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    fetchPurchase: (state, action: PayloadAction<IPurchaseResponse>) => {
      const list = action.payload

      state.page = list.page
      state.per_page = list.per_page
      state.total_pages = list.total_pages
      state.data = list.data
    }
  }
});

export const { fetchPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;