const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
  type Query {
    products: [String]
  }
`;

const resolvers = {
  Query: {
    products: () => ["Computers", "Phones", "Games"]
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

// The `listen` method launches a web server.
server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
