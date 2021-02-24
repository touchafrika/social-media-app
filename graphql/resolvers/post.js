const Post = require("../../models/Post");

module.exports = {
  Query: {
    async getPost() {
      try {
        const post = await Post.find();
        return post;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPost(_, { postId }){
      try {
        const post = await Post.findById(postId);
        if(post){
          return post;
        } else {
          throw new Error('Post not found') 
        }
      } catch (err){
        throw new Error(err);
      }
    }
  },
  
};
