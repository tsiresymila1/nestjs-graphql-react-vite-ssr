import { useAppSelector } from '../hooks/redux';
import * as React from 'react';
import { AuthContextProvider } from '../hooks/auth';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const authData = useAppSelector(state => state.auth.value)
    return <AuthContextProvider value={authData}>{children}</AuthContextProvider>; 
}
