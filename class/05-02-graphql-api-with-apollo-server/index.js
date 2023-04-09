import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: Int
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 10,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
});
console.log(`🚀 Server ready at ${url} on port ${3001}}`);
