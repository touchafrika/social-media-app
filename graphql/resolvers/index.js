const postsResolvers = require("./post.js");
const usersResolvers = require("./users.js");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
};
