const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller');

router.post('/post', postController.createPost);
router.get('/post/all', postController.getPosts);
router.get('/post', postController.getPostByUser);
router.delete('/post/:id', postController.deletePost);

module.exports = router;
