import { Home } from '../pages/Home';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import { useAppSelector } from '../hooks/redux';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast, Zoom } from 'react-toastify';

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
    if (errorMessage != null) {
      toast(errorMessage, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  }, [errorMessage]);

  return (
    <>
      <LoadingBar color="#0086b3" height={3} ref={ref} />
      <ToastContainer limit={1} transition={Zoom} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
