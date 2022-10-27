const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "doit être remplie"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "doit être remplie"],
        index: true,
        validate: [isEmail, "email invalid"]
    },
    password: {
        type: String,
        required: [true, "doit être remplie"],
    },
    picture: {
        type: String
    },
    newMessages: {
        type: Object,
        default: {}
    },
    status: {
        type: String,
        default: 'online'
    }
}, {minimize: false});

const User = mongoose.model('User', UserSchema)

module.exports = User;