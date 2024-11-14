import { ApolloClient, InMemoryCache } from "@apollo/client";
const url = import.meta.env.VITE_BACKEND_URL;

console.log(url);
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client;
