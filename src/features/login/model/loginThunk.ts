import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from 'shared/api/baseUrl';
import ls from 'localstorage-slim';
import { LoginState } from './loginSlice';
import { AxiosError } from 'axios';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
}

export const loginThunk = createAsyncThunk<LoginResponse, Pick<LoginState, 'email' | 'password'>>(
  'login/loginThunk',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await $api.post<LoginResponse>('/auth/login', credentials);

      ls.set('token', response.data.token, {
        encrypt: true,
      });

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      return rejectWithValue(axiosError.response?.data?.message || 'Произошла ошибка при входе');
    }
  },
);
