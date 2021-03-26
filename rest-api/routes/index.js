const path = require('path');
const router = require('express').Router();
const user = require(path.join(__dirname, './user'));
const password = require(path.join(__dirname, './password'));

router.use('/user', user);
router.use('/password', password);

module.exports = router;