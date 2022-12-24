import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginAPI,
  logoutAPI,
  setAuthHeader,
  clearAuthHeader,
} from 'services/apiAuth';

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await loginAPI(credentials);
      console.log('data', data);
      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logoutAPI();
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});