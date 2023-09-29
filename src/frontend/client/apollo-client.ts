import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy() {
        return "no-cache"
      },
    },
  },
});

export default client;
