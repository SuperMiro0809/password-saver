const path = require('path');
const passwordModel = require(path.join(__dirname, '../models/password'));
const userModel = require(path.join(__dirname, '../models/user'));

module.exports = {

    getAll(req, res, next) {

    },

    create(req, res, next) {
        const { name, auth, password } = req.body;

        passwordModel.create({ name, auth, password })
        .then((pass) => {
            const userId = req.user._id;
            
            userModel.update({ _id: userId }, { $push: { savedPassword: pass._id } })
            .then(() => {
                res.status(200)
                .send({ message: 'Success' })
            })
            .catch(next)
        })
        .catch(next)
    },

    edit(req, res, next) {

    },

    delete(req, res, next) {
        
    }
}