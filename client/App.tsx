import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import fetch from 'cross-fetch';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';


import { About } from './pages/About';
import { Home } from './pages/Home';
import './assets/base.css';
import { NotFound } from './pages/NotFound';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch }),
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ApolloProvider>
  );
};
