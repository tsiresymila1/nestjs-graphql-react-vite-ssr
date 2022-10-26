import { useAppDispatch } from '../hooks/redux';
import * as React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { logout } from '../slice/authSlice';
export const Logout = () => {
  let location = useLocation();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    localStorage.removeItem('user');
    dispatch(logout());
  }, []);
  return <Navigate to="/login" state={{ from: location }} replace />;
};
