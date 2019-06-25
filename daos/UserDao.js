const userModel = require('../models/user/UserModel')

const createUser = user =>
    userModel.create(user);

const findUserById = userId =>
    userModel.findById(userId)

const findUserByCredentials = (username,password) =>
    userModel.find({ username: username, password: password})

module.exports = {
    createUser,
    findUserById,
    findUserByCredentials
};