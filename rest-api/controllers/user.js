const path = require('path');
const userModel = require(path.join(__dirname, '../models/user'));
const config = require(path.join(__dirname, '../config/config'));
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { jwtSecret, authCookieName, authHeaderName, saltRounds } = config;

module.exports = {

    register(req, res, next) {
        const { email, password, rePassword } = req.body;

        userModel.create({ email, password })
            .then((user) => {

                const token = jwt.sign({ id: user._id, email }, jwtSecret, { expiresIn: '1d' });

                res.cookie(authCookieName, token)
                res.status(200)
                    .send({ token });
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
        const { email, password } = req.body;

        userModel.findOne({ email })
            .then((user) => {
                return Promise.all([user, user ? user.matchPassword(password) : false]);
            })
            .then(([user, match]) => {
                if (!match) {
                    res.status(401)
                        .send({ message: 'Wrong email or password!' });
                    return;
                }

                const token = jwt.sign({ id: user._id, email }, jwtSecret, { expiresIn: '1d' });

                res.cookie(authCookieName, token)
                res.status(200)
                    .send(user);
            })
            .catch(next)
    },

    logout(req, res, next) {
        const token = req.cookies[authCookieName] || req.headers[authHeaderName] || '';
        if (!token) {
            res.status(401);
            return;
        }

        res.clearCookie(authCookieName);
        res.status(200).send({ message: 'Logged out!' })
    },

    profile(req, res, next) {
        if (!req.user) {
            res.status(401).send({ message: 'Not logged!' })
        } else {
            const { _id } = req.user;

            userModel.findOne({ _id })
                .then((user) => {
                    res.status(200)
                        .send(user);
                })
        }

    },

    resetPassword(req, res, next) {
        const { email, password } = req.body;

        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                userModel.findOne({ email })
                    .then((user) => {
                        userModel.update({ _id: user._id }, { password: hash })
                            .then(() => {
                                res.status(200).send({ message: 'Password changed!' });
                            })
                            .catch(next)
                    })
                    .catch(err => {
                        res.status(401).send({ message: 'Email is not registered!' });
                    });
            })
        })
    },

    resetEmail(req, res, next) {
        const { email } = req.body;
        const userdId = req.user._id;


        userModel.findByIdAndUpdate({ _id: userdId }, { email })
            .then(() => {
                res.status(200)
                    .send({ message: 'Email changed!' })
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
    }
}