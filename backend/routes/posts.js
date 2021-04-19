const express = require('express');

const PostController = require('../controllers/posts');
const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');

const router = express.Router();

// POST ROUTES
router.post('', checkAuth, extractFile, PostController.createPost);

// PUT ROUTES
router.put('/:id', checkAuth, extractFile, PostController.updatePost);

// GET ROUTES
router.get('', PostController.getPosts);
router.get('/:id', PostController.getPost);

// DELETE ROUTES
router.delete('/:id', checkAuth, PostController.deletePost);

module.exports = router;
