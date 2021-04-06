const path = require('path');
const mongoose = require('mongoose');
const config = require(path.join(__dirname,'../config/config'));

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
    }
});

module.exports = mongoose.model('password', passwordSchema);
