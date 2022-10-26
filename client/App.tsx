import * as React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import './assets/base.css';
import 'animate.css';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { AppRouter } from './routes';
import { apolloClient } from './data/apolloClient';
import { store } from './stores';
import Favicon from 'react-favicon';
import { AuthProvider } from './components/AuthProvider';



export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <AuthProvider>
          <Favicon url='client/assets/logo.svg' />
          <AppRouter />
        </AuthProvider>
      </Provider>
    </ApolloProvider>
  );
};
