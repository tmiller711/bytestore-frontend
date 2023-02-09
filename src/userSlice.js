import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  currentUser: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.authenticated = true;
      state.currentUser = action.payload;
      state.token = action.payload.token;
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.authenticated = false;
      state.currentUser = null;
      state.token = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;