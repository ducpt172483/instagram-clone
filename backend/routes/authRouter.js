const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/AuthController');
const requireLogin = require('../app/middleware/requireLogin');

router.get('/', userController.index);
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/protected', requireLogin, userController.protected);

module.exports = router;