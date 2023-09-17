import PostService from '../services/post.service.js';

async function createPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error('Título e Conteúdo são obrigatórios.');
    }
    await PostService.createPost(post);
    res.end();
    logger.info('POST /post');
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
    logger.info('GET /post');
  } catch (err) {
    next(err);
  }
}

async function createComentario(req, res, next) {
  try {
    let post = req.body;
    if (!post.postId || !post.nome || !post.conteudo) {
      throw new Error('PostId, Nome e Conteúdo são obrigatórios.');
    }
    await PostService.createPost(post);
    res.end();
    logger.info('POST /post');
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPosts,
};
