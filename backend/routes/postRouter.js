const express = require('express');
const router = express.Router();
const postController = require('../app/controllers/PostController');
const requireLogin = require('../app/middleware/requireLogin');

router.post('/', requireLogin, postController.create);
router.get('/', postController.show);
router.get('/myPosts', requireLogin, postController.myPost);

module.exports = router;