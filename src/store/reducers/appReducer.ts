import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LoginPayload {
  email: string;
  name: string;
}

interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}

// Mock service
const mockLoginService = ({ email, name }: LoginPayload): Promise<AuthResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@mail.com' && name === 'admin') {
        resolve({ success: true, token: 'token' });
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 1500);
  });
};

export const userLogin = createAsyncThunk<AuthResponse, LoginPayload>(
  'app/mockLogin',
  async ({ email, name }) => {
    const response = await mockLoginService({ email, name });
    return response;
  }
)

export const appReducer = createSlice({
  name: 'app',
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    error: null,
    user: null,
  },
  reducers: {
    setIsUserLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setIsUserLoggedIn } = appReducer.actions;
