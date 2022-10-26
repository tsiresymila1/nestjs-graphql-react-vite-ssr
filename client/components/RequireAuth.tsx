import * as React from 'react';
import { useLocation,Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let auth = useAuth();
    let location = useLocation();

    // if (!auth.access_token || location.pathname === '/logout') {
    //     localStorage.removeItem('user');
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    return children;
}
