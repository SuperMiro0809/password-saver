const path = require('path');
const express = require('express');
const router = express.Router();
const passwordController = require(path.join(__dirname, '../controllers/password'));
const auth = require(path.join(__dirname, '../middlewares/auth'));

router.get('/', passwordController.getAll);

router.post('/', auth, passwordController.create);

router.put('/edit/:id', passwordController.edit);

router.delete('/delete/:id', passwordController.delete);

module.exports = router;