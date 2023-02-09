import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  currentUser: null,
  accessToken: null,
  refreshToken: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.authenticated = true;
      state.currentUser = action.payload;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    updateTokens(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout(state) {
      state.authenticated = false;
      state.currentUser = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { loginSuccess, updateTokens, logout } = authSlice.actions;
export default authSlice.reducer;