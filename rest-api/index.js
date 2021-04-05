const path = require('path');
const express = require('express');
const config = require(path.join(__dirname, './config/config'));
const apiRouter = require(path.join(__dirname, './routes'));
const cors = require('cors');
const serveStatic = require('serve-static');

const app = express();
require(path.join(__dirname, './config/express'))(app);

app.use(cors({
    origin: config.origin,
    credentials: true
}));

app.use('/api', apiRouter);

const port = process.env.PORT || 9000;

app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
})

