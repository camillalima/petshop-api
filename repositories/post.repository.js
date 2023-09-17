import PostSchema from '../schemas/post.schema.js';
import { connect } from './mongo.db.js';

async function createPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    post = new Post(post);
    await post.save();
  } catch (err) {
    throw err;
  }
}

async function getPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    const query = Post.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

/*async function createComentario(comentario) {
  try {
    const productInfo = await getProductInfo(productId);
    productInfo.reviews.push(review);
    await updateProductInfo(productInfo);
  } catch (err) {
    throw err;
  }
}*/

export default {
  createPost,
  getPosts,
};
