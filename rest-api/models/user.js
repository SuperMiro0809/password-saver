const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require(path.join(__dirname,'../config/config'));
const { saltRounds } = config;

mongoose.connect(config.dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    savedPassword: [{ type: mongoose.Types.ObjectId, ref: 'password' }]
});

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
}

userSchema.pre('save', function (next) {
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

module.exports = mongoose.model('user', userSchema);
