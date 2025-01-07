import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginThunk } from './loginThunk';

export interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  email: '',
  password: '',
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetForm: (state) => {
      state.email = '';
      state.password = '';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.email = '';
        state.password = '';
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setEmail, setPassword, setLoading, setError, resetForm } = loginSlice.actions;

export default loginSlice.reducer;
