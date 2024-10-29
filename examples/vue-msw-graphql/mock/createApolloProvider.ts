import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApolloProvider as createApollo } from "@vue/apollo-option";

export const createApolloProvider = () => {
  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  const apolloClient = new ApolloClient({
    uri: "http://localhost:5175",
    cache,
  });

  const apolloProvider = createApollo({
    defaultClient: apolloClient,
  });

  const provideApollo = () => {
    return {
      [DefaultApolloClient]: apolloClient,
    };
  };

  return {
    apolloProvider,
    provideApollo,
  };
};
