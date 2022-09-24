import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ErrorState {
    message?: any
  }

  const initialState: ErrorState = {
    message: undefined,
  }

  export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
      showError: (state, action: PayloadAction<any>) => {
        state.message = action.payload
      },
      hideError: (state) => {
        state.message = undefined;
      },
    
    },
  })
  
  export const { showError, hideError } = errorSlice.actions
  export default errorSlice.reducer