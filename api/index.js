const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    name: String
  }
`;

const resolvers = {
  Query: {
    name: () => "Chris Hayes"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
