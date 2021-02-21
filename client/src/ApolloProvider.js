import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';
import { setContext } from 'apollo-link-context';



const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
});

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});



const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  // uri: 'http://localhost:5000/',
  link: authLink.concat(httpLink),
  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);