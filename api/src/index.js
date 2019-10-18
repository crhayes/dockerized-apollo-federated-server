const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

// Initialize an ApolloGateway instance and pass it an array of implementing
// service names and URLs
const gateway = new ApolloGateway({
  serviceList: [
    { name: "accounts", url: "http://accounts:3000" },
    { name: "products", url: "http://products:3000" }
  ]
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,

  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false
});

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
