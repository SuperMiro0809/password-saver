const path = require('path');
const express = require('express');
const router = express.Router();
const userController = require(path.join(__dirname, '../controllers/user'));

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.get('/profile', userController.profile);

module.exports = router;