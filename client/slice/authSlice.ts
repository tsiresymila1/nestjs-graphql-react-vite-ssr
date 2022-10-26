import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface AuthState {
    value: Record<string, any>;
}

const initialState: AuthState = {
    value:  {
        error: null,
        access_token: null,
        data : null
    } 
};



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state)=>{
            state.value = {
                error: null,
                data: null,
                access_token: null
            }
        },
        logged: (state,action: PayloadAction<any> ) =>{
            state.value = action.payload;
            localStorage.setItem('user',JSON.stringify({ 
                ...action.payload,
                error: null,
            },undefined,2))
        }
    },

});
export const { logout,logged } = authSlice.actions
export default authSlice.reducer;

