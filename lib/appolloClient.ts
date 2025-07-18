// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://your-graphql-endpoint.com/graphql", // Ganti dengan endpoint GraphQL kamu
  cache: new InMemoryCache(),
});

export default client;