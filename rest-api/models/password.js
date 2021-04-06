const path = require('path');
const mongoose = require('mongoose');
const config = require(path.join(__dirname,'../config/config'));
const bcrypt = require('bcrypt');
const { saltRounds } = config;

mongoose.connect(config.dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


const passwordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    auth: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'user' }
});

passwordSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                }
                this.password = hash;
                next();
            })
        })
        return;
    }
    next();
});

module.exports = mongoose.model('password', passwordSchema);
