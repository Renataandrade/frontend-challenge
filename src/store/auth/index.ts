import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AuthService from 'services/AuthService';
import { IAuthStore } from '../../models/Auth';

const Auth = new AuthService()

export const initialState: IAuthStore = {
  isAuthenticated: Auth.isAuthenticated()
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    }
  }
});

export const { fetchAuthenticated } = authSlice.actions;

export default authSlice.reducer;