const path = require('path');
const express = require('express');
const router = express.Router();
const passwordController = require(path.join(__dirname, '../controllers/password'));

router.get('/', passwordController.getAll);

router.post('/', passwordController.create);

router.put('/edit/:id', passwordController.edit);

router.delete('/delete/:id', passwordController.delete);

module.exports = router;