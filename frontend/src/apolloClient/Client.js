import { ApolloClient, InMemoryCache } from "@apollo/client";
const url = import.meta.env.VITE_BACKEND_URL;
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client;
