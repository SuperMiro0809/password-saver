const path = require('path');
const express = require('express');
const router = express.Router();
const passwordController = require(path.join(__dirname, '../controllers/password'));
const auth = require(path.join(__dirname, '../middlewares/auth'));

router.get('/:id', auth, passwordController.getAll);

router.post('/', auth, passwordController.create);

router.put('/:id', auth, passwordController.edit);

router.delete('/:id', auth, passwordController.delete);

module.exports = router;