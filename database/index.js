const { ApolloServer, gql } = require('apollo-server-express');

// GRAPHQL SCHEMA
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// GRAPHQL RESOLVERS
const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
