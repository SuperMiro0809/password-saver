const path = require('path');
const userModel = require(path.join(__dirname, '../models/user'));
const config = require(path.join(__dirname, '../config/config'));
const jwt = require('jsonwebtoken');

const { jwtSecret, authCookieName, authHeaderName, saltRounds } = config;

module.exports = {

    register(req, res, next) {
        const { email, password, rePassword } = req.body;
        console.log(req.cookies);
        userModel.create({ email, password })
            .then((user) => {

                const token = jwt.sign({ id: user._id, email }, jwtSecret, { expiresIn: '1d' });

                res.cookie(authCookieName, token, { httpOnly: true })
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
                        .send({ message: 'Wrong email or password' });
                    return;
                }

                const token = jwt.sign({ id: user._id, email }, jwtSecret, { expiresIn: '1d' });

                res.cookie(authCookieName, token, { httpOnly: true })
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

    }
}