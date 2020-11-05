const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Post = require("./models/Post");
const { MONGODB } = require("./config.js");

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPost: [Post]
  }
`;

const resolvers = {
  Query: {
    async getPost() {
      try {
        const post = await Post.find();
        return post;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: 8000 });
  })
  .then((res) => {
    console.log(`Server running at: ${res.url}`);
  });
