import React from 'react';
import App from './App';
// import ApolloClient from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { createHttpLink } from 'apollo-link-http';
// import { ApolloProvider } from '@apollo/react-hooks';
// import { setContext } from 'apollo-link-context';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:5000'
// });

// const authLink = setContext(() => {
//   const token = localStorage.getItem('jwtToken');
//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : ''
//     }
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: 'http://localhost:5000/',

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