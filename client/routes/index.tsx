import { Home } from '../pages/Home';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import { useAppSelector } from '../hooks/redux';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { Login } from '../pages/Login';
import { RequireAuth } from '../components/RequireAuth';
import { Logout } from '../pages/Logout';
import { Dashboard } from '../pages/Dashboard';

export const AppRouter = () => {
  
  const ref = React.useRef(null);
  const isLoading = useAppSelector((state) => state.loader.isLoading);
  const errorMessage = useAppSelector((state) => state.error.message);

  React.useEffect(() => {
    if (isLoading) {
      ref.current.staticStart();
    } else {
      ref.current.complete();
    }
  }, [isLoading]);

  React.useEffect(() => {
    console.log('errorMessage : =>', errorMessage)
    if (errorMessage != undefined) {
      toast.error(errorMessage.toString(), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        style: {backgroundColor: 'red', color: 'white'}
      });
    }
  }, [errorMessage]);

  return (
    <>
      <LoadingBar color="#0086b3" height={3} ref={ref} />
      <ToastContainer limit={1} transition={Zoom}  />
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace/>} />
        <Route path="/admin" element={
            <RequireAuth>
                <Home />
            </RequireAuth>
        } >
            <Route  index element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
