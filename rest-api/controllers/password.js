const path = require('path');
const passwordModel = require(path.join(__dirname, '../models/password'));
const userModel = require(path.join(__dirname, '../models/user'));

module.exports = {

    getAll(req, res, next) {
        const userId = req.params.id;

        passwordModel.find({ creatorId: userId })
        .then((passwords) => {
            res.status(200)
                .send(passwords);
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

    },

    delete(req, res, next) {

    }
}