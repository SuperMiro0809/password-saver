const express = require('express');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    const jsonBodyParser = express.json();
    app.use(jsonBodyParser);

    app.use(cookieParser());

    app.use(function (err, req, res, next) {
        if (err.message === 'BAD_REQUEST') {
            res.status(400);
            return;
        }
    });
}