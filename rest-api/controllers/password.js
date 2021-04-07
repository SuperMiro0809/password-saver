const path = require('path');
const passwordModel = require(path.join(__dirname, '../models/password'));
const userModel = require(path.join(__dirname, '../models/user'));

module.exports = {

    getAll(req, res, next) {
        const userId = req.params.id;
        const { name } = req.query;

        let query = {};
        query.creatorId = userId;
        if(name) {
            query.name = RegExp(name, 'i');
        }

        passwordModel.find(query)
        .then((passwords) => {
            res.status(200)
                .send(passwords);
        })
        .catch(next)
    },

    getPasswordById(req, res, next) {
        const passwordId = req.params.id;

        passwordModel.findById(passwordId)
        .then((password) => {
            res.status(200)
            .send(password)
        })
        .catch(next)
    },

    create(req, res, next) {
        const { name, auth, password } = req.body;
        const userId = req.user._id;

        passwordModel.create({ name, auth, password, creatorId: userId })
            .then((pass) => {

                res.status(200)
                    .send(pass)

            })
            .catch(next)
    },

    edit(req, res, next) {
        const { name, auth, password } = req.body;
        const passwordId = req.params.id;
        const userId = req.user._id;

        passwordModel.findById(passwordId)
        .then((pass) => {
            if(pass.creatorId.toString() !== userId) {
                next();
                return;
            }

            passwordModel.findByIdAndUpdate({ _id: passwordId }, { name, auth, password })
            .then(() => {
                res.status(200)
                    .send({ message: 'Updated successfully!' })
            })
            .catch(next);
        })
        .catch(next)
    },

    delete(req, res, next) {
        const passwordId = req.params.id;
        const userId = req.user._id;

        passwordModel.findById(passwordId)
        .then((password) => {
            if(password.creatorId.toString() !== userId) {
                next();
                return;
            }

            passwordModel.findByIdAndDelete(passwordId, function(err) {
                if(err) {
                    next(err);
                    return;
                }

                passwordModel.find({ creatorId: userId })
                .then((passwords) => {
                    res.status(200)
                        .send(passwords);
                })
                .catch(next)
            })
        })
    }
}