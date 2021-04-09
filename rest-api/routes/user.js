const path = require('path');
const express = require('express');
const router = express.Router();
const userController = require(path.join(__dirname, '../controllers/user'));
const auth = require(path.join(__dirname, '../middlewares/auth'));

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.get('/profile', auth, userController.profile);

router.put('/reset/password', auth, userController.resetPassword);

router.put('/reset/email', auth, userController.resetEmail);

module.exports = router;