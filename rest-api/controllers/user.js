const path = require('path');
const userModel = require(path.join(__dirname, '../models/user'));
const config = require(path.join(__dirname, '../config/config'));
const jwt = require('jsonwebtoken');

const { jwtSecret, authCookieName, authHeaderName, saltRounds } = config;

module.exports = {

    register(req, res, next) {
        const { email, password, rePassword } = req.body;

        userModel.create({ email, password })
        .then((user) => {

            const token = jwt.sign({ id: user._id, email }, jwtSecret, { expiresIn: '1d' });

            res.cookie(authCookieName, token, { httpOnly: true })
            res.status(200)
                .send(user);
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                let field = err.message.split("index: ")[1];
                field = field.split(" dup key")[0];
                field = field.substring(0, field.lastIndexOf("_"));

                res.status(409)
                    .send({ message: `This ${field} is already registered!` });
                return;
            }
            next(err);
        });
    },

    login(req, res, next) {

    },

    logout(req, res, next) {

    },

    profile(req, res, next) {
        
    }
}