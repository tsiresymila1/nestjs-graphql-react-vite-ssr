import * as React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import './assets/base.css';
import { AppRouter } from './routes';
import { apolloClient } from './data/apolloClient';
import { store } from './stores';
import Favicon from 'react-favicon';

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Favicon url='client/assets/logo.svg' />
        <AppRouter />
      </Provider>
    </ApolloProvider>
  );
};
